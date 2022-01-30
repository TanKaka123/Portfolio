import React, { useState } from 'react';
import Tittle from '../../Components/Tittle/Tittle';

import Footer from '../../Components/Footer/Footer';
import HongTan from '../../Components/HongTan/HongTan';

import '../Home/Header/Header.css'
import './LienLac.css';
import Header from './Header/Header';

function LienLac() {
   
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

export default LienLac;