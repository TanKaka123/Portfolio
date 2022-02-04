import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {IconResume,IconProject,IconBack, IconBackMobile } from '../Icon';
import '../../Home/Header/Header.css'
function Header({openProject}:any) {
    const [changeColor, setChangeColor] = useState("");
  
    return (
     
           
            <div className="header ">
             
             <Link className="icon-back" to={'/'}>
                    <IconBack/>
            
                </Link>
                <Link className="icon-back-mobile" to={'/'}>
                      
                      <IconBackMobile/>
                            </Link>
    
      <div className="Tittle-CongViec">Resume và Project </div>
      <div className="nav">
        <ul className="nav-bar">
          <a href="./Resume.pdf" download
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("resume");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }} rel="noreferrer"
          >
            <IconResume color={changeColor} />
            <h2 className="discription"  style={{left : "2.2em", bottom:"0"}}>Resume/CV</h2>
          </a>
          <a href="#resume"
            onClick={()=>{openProject(true)}}
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("project");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }}
          >
            <IconProject  color={changeColor}/>
            <h2 className="discription" style={{right : "3em"}}>Project</h2>
          </a>
         
          
        </ul>
      </div>
    </div>
           
    );
}

export default Header;