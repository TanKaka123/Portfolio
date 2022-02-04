import React from 'react';
import './BanThan.css'
import MoveTop from '../../../Components/MoveTop/MoveTop';
function BanThan() {
    return (
        <div className='aboutme'>
            <div className="aboutme-avt--wrapper">
            <img src="./avatar-HongTan.png" alt="Tan" className="aboutme-avatar" />
            </div>
           <div className="aboutme-desc">
               <div className="aboutme-name"> <p className="">Họ và Tên </p>  <h3 className="">Nguyễn Hồng Tấn</h3></div>
               <div className="aboutme-date"> <p className="">N/T/N sinh </p>  <h3 className="">14/02/2002</h3></div>
               <div className="aboutme-job"><p className="">Nghề nghiệp   </p>  <h3 className="">Sinh viên</h3></div>
               <div className="aboutme-role"><p className="">Vai trò </p>  <h3 className="">Lớp trưởng</h3></div>
               <div className="aboutme-major"><p className="">Chuyên ngành </p>  <h3 className="">Công nghệ thông tin</h3></div>
              
               <div className="aboutme-university"><p className="">Trường </p>  <h3 className="">Trường ĐH Khoa Học Tự Nhiên-ĐHQGHCM</h3></div>
               <div className="aboutme-hobby"><p className="">Sở thích  </p>  <h3 className="">Code, bóng chuyền, bóng đá, bóng rỗ, chạy bộ,...</h3></div>
               <div className="aboutme-idol"><p className="">Thần tượng  </p>  <h3 className="">Abraham Lincoln, Ricardo Kaká</h3></div>
               <div className="aboutme-quetos"><p className="">Quetos </p>  <h3 className="">"Cách tốt nhất để dự đoán tương lai là tạo ra nó" - Abraham Lincoln</h3></div>
               <MoveTop/>
           </div>
        </div>
    );
}

export default BanThan;