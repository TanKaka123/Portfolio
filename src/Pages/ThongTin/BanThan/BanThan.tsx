import './BanThan.css'
import MoveTop from '../../../Components/MoveTop/MoveTop';
function BanThan() {
    return (
        <div className='aboutme'>
            <div className="aboutme-avt--wrapper">
            <img src="./imgMe/avatar-HongTan.png" alt="Tan" className="aboutme-avatar" />
            </div>
           <div className="aboutme-desc">
               <div className="aboutme-name"> <p className="">Họ và Tên </p>  <h4 className="">Nguyễn Hồng Tấn</h4></div>
               <div className="aboutme-date"> <p className="">N/T/N sinh </p>  <h4 className="">14/02/2002</h4></div>
               <div className="aboutme-job"><p className="">Nghề nghiệp   </p>  <h4 className="">Sinh viên</h4></div>
               <div className="aboutme-role"><p className="">Vai trò </p>  <h4 className="">Lớp trưởng</h4></div>
               <div className="aboutme-major"><p className="">Chuyên ngành </p>  <h4 className="">Công nghệ thông tin</h4></div>
              
               <div className="aboutme-university"><p className="">Trường </p>  <h4 className="">Trường ĐH Khoa Học Tự Nhiên - ĐHQGHCM</h4></div>
               <div className="aboutme-hobby"><p className="">Sở thích  </p>  <h4 className="">Code, bóng chuyền, bóng đá, bóng rỗ, chạy bộ,...</h4></div>
               <div className="aboutme-idol"><p className="">Thần tượng  </p>  <h4 className="">Abraham Lincoln, Ricardo Kaká</h4></div>
               <div className="aboutme-quetos"><p className="">Quotes </p>  <h4 className="">"Cách tốt nhất để dự đoán tương lai là tạo ra nó" - Abraham Lincoln</h4></div>
               <MoveTop/>
           </div>
        </div>
    );
}

export default BanThan;