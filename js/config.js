/* Cấu hình chung của trang.
   graderUrl: địa chỉ máy chấm Writing bằng AI (Cloudflare Worker), xem worker/README.md.
   serverUrl: địa chỉ máy chủ lưu tài khoản và đồng bộ tiến độ. Thường là chính Worker máy chấm (đã gắn KV tên DATA),
   để trống thì dùng graderUrl. Điền vào đây thì mọi máy mở trang đều dùng được, không cần dán lại. Ví dụ:
   graderUrl: "https://hiking-ielts-grader.ten-ban.workers.dev" */
window.HIKING_CONFIG = {
  graderUrl: "",
  serverUrl: ""
};
