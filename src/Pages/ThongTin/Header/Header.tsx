import React, { useState } from 'react';
import { IconPrivate,IconActivity, IconStory, IconBack } from '../Icon';
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
            <IconPrivate color={changeColor} />
            <h2 className="discription"  style={{left : "2.5em"}}>Bản Thân</h2>
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
            <h2 className="discription" style={{right : "14.6em"}}>Hoạt Động</h2>
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
            <h2 className="discription" style={{right : "2em"}}>Câu Chuyện</h2>
          </a>

          
        </ul>
      </div>
    </div>
        </div>
    );
}

export default Header;