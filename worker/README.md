# Máy chấm Writing bằng AI (miễn phí)

Trang web gửi bài viết của bạn tới một **Cloudflare Worker** nhỏ. Worker nhờ AI chấm theo 4 tiêu chí IELTS và trả lại band ước lượng, nhận xét bằng tiếng Việt và phần sửa lỗi.

Worker **luân phiên** giữa các gói miễn phí, bên này hết lượt thì tự chuyển sang bên kia:

| Thứ tự | AI | Lượt miễn phí (ước tính) |
|---|---|---|
| 1 | Gemini Flash (`gemini-3.6-flash`) | khoảng 20 bài/ngày |
| 2 | Gemini Flash-Lite (`gemini-3.5-flash-lite`) | khoảng vài trăm bài/ngày |
| 3 | Llama 3.3 70B trên Cloudflare Workers AI | khoảng 40–60 bài/ngày |

- **Chi phí:** 0 đồng, không cần thẻ ngân hàng. Hết lượt ở cả ba thì trang báo "thử lại vào ngày mai", không bị tính tiền.
- Gemini là tùy chọn: nếu chưa thêm Gemini API key, Worker chỉ dùng Cloudflare.
- Ở gói miễn phí, Google có thể dùng nội dung gửi lên để cải thiện sản phẩm. Bài luyện IELTS thì không sao, đừng ghi thông tin cá nhân trong bài.
- Điểm do AI chấm chỉ là **ước lượng để tham khảo**, có thể lệch 0.5–1 band so với giám khảo thật.

## Cài đặt qua trang web Cloudflare (khoảng 10 phút)

> Tên các nút trên trang Cloudflare có thể khác đôi chút tùy thời điểm, nhưng các bước chính giống nhau.

1. **Tạo tài khoản**: vào <https://dash.cloudflare.com/sign-up>, đăng ký bằng email (miễn phí).
2. **Tạo Worker**: ở menu bên trái chọn **Compute (Workers) → Workers & Pages → Create** → chọn mẫu **Hello World** (Start with Hello World).
   Đặt tên, ví dụ `hiking-ielts-grader`, rồi bấm **Deploy**.
3. **Dán code**: bấm **Edit code**. Xóa hết code mẫu trong file `worker.js`, dán toàn bộ nội dung file [`worker.js`](./worker.js) trong thư mục này vào, rồi bấm **Deploy**.
4. **Gắn Workers AI**: quay lại trang của Worker → tab **Bindings** (hoặc **Settings → Bindings**) → **Add binding** → chọn **Workers AI** → đặt **Variable name** là `AI` (viết hoa) → **Add / Deploy**.
5. **Thêm Gemini (khuyên dùng, để chấm tốt hơn)**:
   - Vào <https://aistudio.google.com/apikey>, đăng nhập Google, bấm **Create API key** và sao chép key.
   - Quay lại Worker → **Settings → Variables and Secrets** → **Add** → chọn loại **Secret**, tên `GEMINI_API_KEY`, dán key vào → **Deploy**.
   - Không dán key vào code hay vào trang web, chỉ để trong Secret của Worker.
6. **Lấy địa chỉ**: địa chỉ Worker có dạng `https://hiking-ielts-grader.<tên-tài-khoản>.workers.dev`. Mở địa chỉ đó trên trình duyệt, nếu thấy `{"ok":true,...}` là máy chấm đã chạy. Dòng `gemini` cho biết đã nhận key chưa, dòng `workersAI` cho biết đã gắn Workers AI chưa.
7. **Kết nối với trang web** (chọn một cách):
   - **Nhanh:** mở tab Writing trên trang, dán địa chỉ vào ô "Chấm bài bằng AI" rồi bấm **Lưu**. Cách này chỉ lưu trên trình duyệt đang dùng.
   - **Dùng mọi máy:** sửa file [`js/config.js`](../js/config.js), điền `graderUrl: "https://hiking-ielts-grader.<tên-tài-khoản>.workers.dev"` rồi đẩy lên GitHub.

## Bảo vệ lượt chấm miễn phí (khuyên dùng)

Mặc định ai biết địa chỉ Worker cũng gọi được. Để chỉ trang của bạn dùng được:
Worker → **Settings → Variables and Secrets** → **Add** → tên `ALLOWED_ORIGINS`, giá trị là địa chỉ trang web, ví dụ `https://hoanghuypm09.github.io` (nhiều địa chỉ thì ngăn cách bằng dấu phẩy) → **Deploy**.

## Cài bằng dòng lệnh (tùy chọn)

Nếu máy bạn có Node.js:

```bash
cd worker
npx wrangler login
npx wrangler deploy
```

File [`wrangler.toml`](./wrangler.toml) đã khai báo sẵn binding `AI`. Thêm Gemini key bằng lệnh `npx wrangler secret put GEMINI_API_KEY`.

## Đổi model Gemini

Google thường xuyên ra model mới và ngừng model cũ. Nếu model mặc định bị ngừng, thêm biến `GEMINI_MODELS` (Settings → Variables and Secrets, loại Text) với danh sách model theo thứ tự muốn thử, ngăn cách bằng dấu phẩy, ví dụ `gemini-3.8-flash,gemini-3.5-flash-lite`. Xem tên model miễn phí ở <https://ai.google.dev/gemini-api/docs/pricing>.

## Gỡ lỗi nhanh

| Thông báo trên trang | Cách xử lý |
|---|---|
| Không kết nối được máy chấm | Kiểm tra địa chỉ (phải bắt đầu bằng `https://`), thử mở địa chỉ trên trình duyệt. |
| Máy chấm chưa được cấu hình | Làm lại bước 4 (binding tên đúng là `AI`) hoặc bước 5 (secret `GEMINI_API_KEY`). |
| Kết quả luôn ghi "Chấm bởi Llama" dù đã thêm Gemini | Kiểm tra key ở bước 5, hoặc Gemini đã hết lượt trong ngày (reset khoảng 14–15 giờ chiều giờ Việt Nam). |
| Origin not allowed | Giá trị `ALLOWED_ORIGINS` chưa có địa chỉ trang của bạn. |
| Đã hết lượt chấm miễn phí hôm nay | Cả ba đều hết lượt. Cloudflare reset lúc 7 giờ sáng giờ Việt Nam, Gemini reset khoảng 14–15 giờ chiều. |
