# Máy chấm Writing bằng AI (miễn phí)

Trang web gửi bài viết của bạn tới một **Cloudflare Worker** nhỏ. Worker dùng **Workers AI** (mô hình Llama 3.3 70B) để chấm theo 4 tiêu chí IELTS và trả lại band ước lượng, nhận xét bằng tiếng Việt và phần sửa lỗi.

- **Chi phí:** 0 đồng. Gói miễn phí của Cloudflare có 100.000 lượt gọi Worker và 10.000 "neurons" Workers AI mỗi ngày. Một lần chấm tốn khoảng 150–250 neurons, nên chấm được khoảng **40–60 bài mỗi ngày**. Hết lượt thì trang báo "thử lại vào ngày mai", không bị tính tiền.
- **Không cần API key**, không cần thẻ ngân hàng. Chỉ cần một tài khoản Cloudflare.
- Điểm do AI chấm chỉ là **ước lượng để tham khảo**, có thể lệch 0.5–1 band so với giám khảo thật.

## Cài đặt qua trang web Cloudflare (khoảng 10 phút)

> Tên các nút trên trang Cloudflare có thể khác đôi chút tùy thời điểm, nhưng các bước chính giống nhau.

1. **Tạo tài khoản**: vào <https://dash.cloudflare.com/sign-up>, đăng ký bằng email (miễn phí).
2. **Tạo Worker**: ở menu bên trái chọn **Compute (Workers) → Workers & Pages → Create** → chọn mẫu **Hello World** (Start with Hello World).
   Đặt tên, ví dụ `hiking-ielts-grader`, rồi bấm **Deploy**.
3. **Dán code**: bấm **Edit code**. Xóa hết code mẫu trong file `worker.js`, dán toàn bộ nội dung file [`worker.js`](./worker.js) trong thư mục này vào, rồi bấm **Deploy**.
4. **Gắn Workers AI**: quay lại trang của Worker → tab **Bindings** (hoặc **Settings → Bindings**) → **Add binding** → chọn **Workers AI** → đặt **Variable name** là `AI` (viết hoa) → **Add / Deploy**.
5. **Lấy địa chỉ**: địa chỉ Worker có dạng `https://hiking-ielts-grader.<tên-tài-khoản>.workers.dev`. Mở địa chỉ đó trên trình duyệt, nếu thấy `{"ok":true,...}` là máy chấm đã chạy.
6. **Kết nối với trang web** (chọn một cách):
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

File [`wrangler.toml`](./wrangler.toml) đã khai báo sẵn binding `AI`.

## Gỡ lỗi nhanh

| Thông báo trên trang | Cách xử lý |
|---|---|
| Không kết nối được máy chấm | Kiểm tra địa chỉ (phải bắt đầu bằng `https://`), thử mở địa chỉ trên trình duyệt. |
| Worker chưa được gắn Workers AI | Làm lại bước 4, tên binding phải đúng là `AI`. |
| Origin not allowed | Giá trị `ALLOWED_ORIGINS` chưa có địa chỉ trang của bạn. |
| Đã hết lượt chấm miễn phí hôm nay | Đợi sang ngày mới (7 giờ sáng giờ Việt Nam, tức 00:00 UTC). |
