# Giao diện ứng dụng chỉnh sửa video

## Mục tiêu
Dựng trang chủ sát ảnh tham chiếu: nền đen, điểm nhấn vàng, thanh điều hướng mảnh, khu nhập liên kết/tải video, hàng công cụ AI, thư viện video mẫu và danh sách dự án.

## Phạm vi
- Tái tạo bố cục, màu sắc, tỷ lệ, khoảng cách và phong cách thị giác của ảnh.
- Thêm trạng thái tương tác cho tab, chọn tệp, nhập liên kết, các nút công cụ, chọn nhiều dự án và menu tài khoản.
- Dùng ảnh minh họa phù hợp cho video mẫu; các media chưa có được thể hiện bằng khung thay thế dễ đổi sau.
- Tối ưu để dùng tốt trên màn hình lớn và điện thoại.
- Bổ sung tiêu đề và mô tả chia sẻ cho trang.

## Chi tiết kỹ thuật
- Xây toàn bộ bằng React/TanStack hiện có, không thêm máy chủ hay lưu trữ dữ liệu.
- Tạo hệ màu semantic đen–than–vàng trong hệ thống giao diện chung.
- Tách các phần lặp lại thành dữ liệu và thành phần nhỏ để dễ bổ sung công cụ, video mẫu và dự án sau này.
- Kiểm tra hiển thị thực tế, thao tác tải tệp/tab và lỗi trình duyệt trước khi hoàn tất.
