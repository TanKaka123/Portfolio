import React, { useState } from 'react';
import Tittle from '../Home/Tittle/Tittle';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import HongTan from '../Home/Header/HongTan';
import { IconPrivate,IconActivity, IconStory, IconBack } from './Icon';
import '../Home/Header/Header.css'
import { Link } from 'react-router-dom';
import './ThongTin.css'

function ThongTin() {
    const [changeColor, setChangeColor] = useState("");
    return (
        <div>
            <Tittle/>
            <div className="header ">
                <HongTan/>
             <Link className="icon-back" to={'/'}>
                    <IconBack/>
            
                </Link>
        
    
      <div className="Tittle-ThongTin">Thông Tin Cá Nhân</div>
      <div className="nav">
        <ul className="nav-bar">
          <a href="https://github.com/TanKaka123" target="_blank"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("private");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }} rel="noreferrer"
          >
            {" "}
            <IconPrivate color={changeColor} />
            <h2 className="discription"  style={{left : "4.9em"}}>Bản Thân</h2>
          </a>
          <a href="mailto:hongtan1422002@gmail.com?"
            target="_blank"
            rel="noreferrer"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("activity");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }}
          >
            <IconActivity  color={changeColor}/>
            <h2 className="discription" style={{right : "12.3em"}}>Hoạt Động</h2>
          </a>
          <a href='https://www.linkedin.com/in/nguyenhongtan/' target="_blank"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("story");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }} rel="noreferrer"
          >
            <IconStory  color={changeColor}/>
            <h2 className="discription" style={{right : "-0.5em"}}>Câu Chuyện</h2>
          </a>

          
        </ul>
      </div>
    </div>
            <Footer/>
        </div>
    );
}

export default ThongTin;