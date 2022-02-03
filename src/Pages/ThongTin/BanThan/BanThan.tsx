import React from 'react';
import './BanThan.css'

function BanThan() {
    return (
        <div className='aboutme'>
            <div className="aboutme-avt--wrapper">
            <img src="./avatar-HongTan.png" alt="Tan" className="aboutme-avatar" />
            </div>
           <div className="aboutme-desc">
               <div className="aboutme-name"> <p className="">Họ và Tên </p>  <h2 className="">Nguyễn Hồng Tấn</h2></div>
               <div className="aboutme-date"> <p className="">N/T/N sinh </p>  <h2 className="">14/02/2002</h2></div>
               <div className="aboutme-job"><p className="">Nghề nghiệp   </p>  <h2 className="">Sinh viên</h2></div>
               <div className="aboutme-role"><p className="">Vai trò </p>  <h2 className="">Lớp trưởng</h2></div>
               <div className="aboutme-major"><p className="">Chuyên ngành </p>  <h2 className="">Công nghệ thông tin</h2></div>
              
               <div className="aboutme-university"><p className="">Trường </p>  <h2 className="">Trường ĐH Khoa Học Tự Nhiên-ĐHQGHCM</h2></div>
               <div className="aboutme-hobby"><p className="">Sở thích  </p>  <h2 className="">Code, bóng chuyền, bóng đá, bóng rỗ, chạy bộ,...</h2></div>
               <div className="aboutme-quetos"><p className="">Quetos </p>  <h2 className="">"Cách tốt nhất để dự đoán tương lai là tạo ra nó"</h2></div>

              
           </div>
        </div>
    );
}

export default BanThan;