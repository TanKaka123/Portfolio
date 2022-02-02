import React, { useState } from 'react';
import Footer from '../../../Components/Footer/Footer';
import {IconGithub,IconMail,IconLinkedin,IconBack,IconBackMobile  } from '../Icon'
import '../../../Pages/Home/Header/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    const [changeColor, setChangeColor] = useState("");
    return (
        <div>
               <div className="header ">
               
               <Link className="icon-back" to={'/'}>
                      <IconBack/>
              
                  </Link>
           <Link className="icon-back-mobile" to={'/'}>
                      
            <IconBackMobile/>
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
              <h2 className="discription"  style={{left : "3.2em"}}>Github</h2>
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
              <h2 className="discription" style={{right : "16em"}}>Email</h2>
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
              <h2 className="discription" style={{right : "2.8em"}}>Linkedin</h2>
            </a>
  
            
          </ul>
        </div>
      </div>
        </div>
    );
}

export default Header;