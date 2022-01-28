import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css'
import Tittle from './Tittle/Tittle'

function Home() {
    return (
    <>
    <div className="Home">
       <Tittle/>
        <Header/>
        <Footer/>
    </div>
    </>
    );
}

export default Home;