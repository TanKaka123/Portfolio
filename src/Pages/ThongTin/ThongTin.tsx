import React, { useState } from 'react';
import Tittle from '../../Components/Tittle/Tittle';
import Footer from '../../Components/Footer/Footer';
import HongTan from '../../Components/HongTan/HongTan';
import '../../baseCss/common.css'
import './ThongTin.css'
import Header from './Header';
import BanThan from './BanThan/BanThan';
import HoatDong from './HoatDong/HoatDong';
import CauChuyen from './CauChuyen/CauChuyen';

function ThongTin() {
    const [handleSelect,setHandleSelect]=useState(' ');
    return (
      <div>
        <Tittle/>
        <div className="contain-heading">
       <Header click={setHandleSelect}/>
       </div>
       <HongTan/>
        <Footer/>
        { handleSelect==="ban-than"
        && <div id="ban-than" ><BanThan/></div>}
        {
            handleSelect==="hoat-dong"
            && <div id="hoat-dong" ><HoatDong/>
          </div>
        }
        {
             handleSelect==="cau-chuyen"
             && <div id="cau-chuyen" ><CauChuyen/>
           </div>
        }
        </div>
    );
}

export default ThongTin;