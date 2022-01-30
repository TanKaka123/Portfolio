import Tittle from '../../Components/Tittle/Tittle';
import Footer from '../../Components/Footer/Footer';
import HongTan from '../../Components/HongTan/HongTan';
import './CongViec.css'
import Header from './Header/Header';




function CongViec() {
    return (
        <div>
            <Tittle/>
            <div className="contain-heading">
       <Header/>
       </div>
                <HongTan/>
          
            <Footer/>
        </div>
    );
}

export default CongViec;