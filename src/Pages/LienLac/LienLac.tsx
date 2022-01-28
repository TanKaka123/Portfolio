import React, { useState } from 'react';
import Tittle from '../Home/Tittle/Tittle';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import HongTan from '../Home/Header/HongTan';
import {IconGithub,IconMail,IconLinkedin,IconBack } from './Icon'
import '../Home/Header/Header.css'
import './LienLac.css';
import { Link } from 'react-router-dom';

function LienLac() {
    const [changeColor, setChangeColor] = useState("");
    return (
        <div>
            <Tittle/>
            <div className="header ">
                <HongTan/>
             <Link className="icon-back" to={'/'}>
                    <IconBack/>
            
                </Link>
        
    
      <div className="Tittle-LienLac">Thông Tin Liên Lạc</div>
      <div className="nav">
        <ul className="nav-bar">
          <a href="https://github.com/TanKaka123" target="_blank"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("github");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }} rel="noreferrer"
          >
            {" "}
            <IconGithub color={changeColor} />
            <h2 className="discription"  style={{left : "5.6em"}}>Github</h2>
          </a>
          <a href="mailto:hongtan1422002@gmail.com?"
            target="_blank"
            rel="noreferrer"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("mail");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }}
          >
            <IconMail  color={changeColor}/>
            <h2 className="discription" style={{right : "13.6em"}}>Email</h2>
          </a>
          <a href='https://www.linkedin.com/in/nguyenhongtan/' target="_blank"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("linkedin");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }} rel="noreferrer"
          >
            <IconLinkedin  color={changeColor}/>
            <h2 className="discription" style={{right : "0.4em"}}>Linkedin</h2>
          </a>

          
        </ul>
      </div>
    </div>
            <Footer/>
        </div>
    );
}

export default LienLac;