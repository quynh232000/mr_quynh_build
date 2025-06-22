# # Dùng image Apache nhẹ
# FROM httpd:alpine

# # Xóa nội dung cũ trong thư mục phục vụ web
# RUN rm -rf /usr/local/apache2/htdocs/*

# # Copy React build (folder mr_quynh_build_1 chứa index.html, static/...) vào thư mục Apache
# COPY mr_quynh_build_1/ /usr/local/apache2/htdocs/

# # Copy file .htaccess vào thư mục đó (giúp xử lý SPA routing)
# COPY mr_quynh_build_1/.htaccess /usr/local/apache2/htdocs/.htaccess

# # Expose port 80
# EXPOSE 80

# # Chạy Apache trong foreground
# CMD ["httpd", "-D", "FOREGROUND"]

# Dùng image Apache nhẹ
FROM httpd:alpine

# Xóa nội dung cũ trong thư mục phục vụ web
RUN rm -rf /usr/local/apache2/htdocs/*

# Copy React build (index.html, static/, manifest...) vào thư mục Apache
COPY mr_quynh_build_1/ /usr/local/apache2/htdocs/

# Copy file .htaccess vào đúng thư mục root của Apache (nơi có index.html)
COPY mr_quynh_build_1/.htaccess /usr/local/apache2/htdocs/.htaccess

# Bật module rewrite để .htaccess hoạt động (chỉ cần thiết nếu dùng httpd non-alpine)
# Với httpd:alpine thì mod_rewrite đã sẵn
# Nếu bạn dùng Debian-based image thì thêm:
# RUN sed -i '/^#LoadModule rewrite_module/s/^#//' /usr/local/apache2/conf/httpd.conf

# Expose port 80
EXPOSE 80

# Chạy Apache trong foreground
CMD ["httpd", "-D", "FOREGROUND"]
