# **Cấu hình git**
- Config username: **git config --global user.name "<your_name>"**
- Config email: **git config --global user.email "<your_email>"**
- Config branch default: **git config --global init.defaultBranch name**

# **Kết nối với GitHub**
- SSH keys là một cách đăng nhập bảo mật dùng trong Git và GitHub mà không cần nhập password mỗi lần push code.
- SSH key gồm 2 phần:
  + Public key (**id_rsa.pub**): đưa cho GitHub
  + Private key (**id_rsa**): giữ trong máy mình
## **Cách set SSH key vào GitHub**  
- Lệnh tạo SSH keys:
  **ssh-keygen -t rsa -b 4096 -C "your email"**
- Lấy nội dung ssh key: **cat ~/.ssh/id_rsa.pub**
- Truy cập: https://github.com/settings/ssh/new để thêm ssh key
  + Đặt Title
  + Paste key vào Key field
  + Click Add SSH key
# **Cài đặt Playwright**
1. Tạo folder 
2. Mở folder bằng VScode
3. Mở terminal lên và run: **npm init playwright@latest**
4. Liên tục gõ enter cho tới khi done
# **Đưa code lên GitHub**
1. Khởi tạo repo local: **git init**
2. Tạo repo GitHub
  + Vào trang https://github.com/new
  + Điền tên repository
  + Chọn "Public"
3. Liên kết tới repo local: **git remote add origin <repo_url>"**

=> 3 bước trên làm 1 lần duy nhất

4. Thêm file vào staging: **git add .**
54. Commit file: **git commit -m "<commit_message>"**
6. Push code: **git push origin main**

=> 3 bước trên làm mỗi khi có thay đổi

