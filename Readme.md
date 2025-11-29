
# tổng quan
tạo nhánh riêng để làm
code perfect pixel nhất có thể. (có addon trên chrome và các trình duyệt khác)

# về html
tạo thư mục trang tương trong thư mục public 
vui lòng xem sitemap để biết tên trang để đặt tên thư mục.

# về js
tạo file cùng tên trang trong thư mục public/assets/js
thư viện ngoài thì bỏ vào trong public/vender/

# về images 
ảnh trang nào thì tạo thư mục tương ứng trong src/images để bỏ vào
tên ảnh vui lòng dùng _ để nối
dùng lệnh gulp img để chuyển ảnh sang webp

# về css
tạo thư mục tương ứng trong thư mục src/scss/page/ và file tương ứng trong src/scss/ để làm
(tham khảo trang Top)

# gulp 
sử dụng gulp để build scss và image webp
npm install // để cài đặt package
gulp // để tiến hành build scss
gulp img // để chuyển ảnh sang định dạng webp
(việc build scss có thể dùng lệnh sass để build)

# cách dùng @media 
.class {
    @include mq() { // cho min-width: 768px
        margin-top: 53px;
    }
}
.class {
    @include mq(sp) { // cho max-width: 767px
        margin-top: 53px;
    }
}
ngoài ra có thể tham khảo thêm các @media ở file src/scss/global/_breakpoints.scss
(hạn chế việc dùng nhiều quá breakpoints)

# tên class
sử dụng _ thay cho -
vd: p_recurit__abc (có thể tham khảo trang index) 

# css dùng chung.
tránh viết riêng.
tạo file trong thư mục src/scss/component sau đó @use vào trong file src/scss/component/_index.scss

