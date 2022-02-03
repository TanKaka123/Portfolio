import React, { useState } from 'react';
import Tittle from '../../Components/Tittle/Tittle';
import Footer from '../../Components/Footer/Footer';
import HongTan from '../../Components/HongTan/HongTan';
import '../Home/Header/Header.css'
import { Link } from 'react-router-dom';
import './ThongTin.css'
import Header from './Header/Header';
import BanThan from './BanThan/BanThan';
function ThongTin() {
    
    return (
      <div>
        <Tittle/>
        <div className="contain-heading">
       <Header/>
       </div>
       <HongTan/>
        <Footer/>
        <BanThan/>
        </div>
    );
}

export default ThongTin;