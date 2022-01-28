import React, { useState } from 'react';
import Tittle from '../Home/Tittle/Tittle';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import HongTan from '../Home/Header/HongTan';
import './CongViec.css'
import '../Home/Header/Header.css'
import { Link } from 'react-router-dom';
import {IconResume,IconProject,IconBack } from './Icon'


function CongViec() {
    const [changeColor, setChangeColor] = useState("");
    return (
        <div>
            <Tittle/>
            <div className="header ">
                <HongTan/>
             <Link className="icon-back" to={'/'}>
                    <IconBack/>
            
                </Link>
        
    
      <div className="Tittle-CongViec">Thông Tin Project Và Resume </div>
      <div className="nav">
        <ul className="nav-bar">
          <a href="https://github.com/TanKaka123" target="_blank"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("resume");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }} rel="noreferrer"
          >
            {" "}
            <IconResume color={changeColor} />
            <h2 className="discription"  style={{left : "4.5em"}}>Resume/CV</h2>
          </a>
          <a href="mailto:hongtan1422002@gmail.com?"
            target="_blank"
            rel="noreferrer"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("project");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }}
          >
            <IconProject  color={changeColor}/>
            <h2 className="discription" style={{right : "0.5em"}}>Project</h2>
          </a>
         
          
        </ul>
      </div>
    </div>
            <Footer/>
        </div>
    );
}

export default CongViec;