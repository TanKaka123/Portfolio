import Footer from '../../Components/Footer/Footer';
import Header from './Header/Header';
import './Home.css'
import Tittle from '../../Components/Tittle/Tittle';
import HongTan from '../../Components/HongTan/HongTan';

function Home() {
    return (
    <>
    <div className="Home">
       <Tittle/>
       <div className="contain-heading">
       <Header/>
       </div>
       <HongTan/>
        <Footer/>
    </div>
    </>
    );
}

export default Home;