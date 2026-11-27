# Sổ Học IELTS (Hiking IELTS)

Website tự học IELTS đi theo lộ trình của hai giáo trình: *Complete IELTS Bands 4–5* (10 unit, band 4.0–5.0) và *Complete IELTS Bands 5–6.5* (8 unit, band 5.0–6.5). Chọn giáo trình bằng menu cạnh logo; tiến độ của mỗi sách được lưu riêng.

Mỗi unit gồm: từ vựng (flashcard, phát âm, quiz), ngữ pháp, Reading, Listening, Writing (biểu đồ Task 1 và bài mẫu) và Speaking (Part 1–3, đồng hồ Part 2). Sau mỗi 2 unit có bài ôn tập. Tiến độ được lưu trên trình duyệt (localStorage).

Bài đọc, bài nghe, câu hỏi và bài mẫu là nội dung tự soạn, không sao chép từ sách.

## Cấu trúc thư mục

```
index.html            Khung trang
css/style.css         Giao diện (màu, font, bố cục, chế độ tối)
js/app.js             Logic: điều hướng, quiz, biểu đồ, đọc giọng nói, lưu tiến độ
data/units-1-5.js     Nội dung Unit 1–5
data/units-6-10.js    Nội dung Unit 6–10
data/b2/u1.js … u8.js Sách Bands 5–6.5: mỗi file một unit (id b2u1…b2u8), kèm mẹo, lỗi hay gặp, ngân hàng ngữ pháp, từ đồng/trái nghĩa
```

Muốn sửa hoặc thêm bài, chỉ cần sửa các file trong `data/`. Mỗi unit là một object gồm `vocab`, `grammar`, `reading`, `listening`, `writing`, `speaking`.

## Chạy

Mở `index.html` trong trình duyệt, hoặc bật GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.
