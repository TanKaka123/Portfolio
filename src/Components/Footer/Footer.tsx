import React, { useState } from 'react';
import './Footer.css'
import Modal from './Modal';
function Footer() {
    const [openModal,setOpenModal]=useState(false);
    return (
        <div>
            <div className="footer">
            <div className="animation-ball" onMouseOver={()=>setOpenModal(true)}
            onMouseOut={()=>setOpenModal(false)}>
                <div className="basketball">
                    <div className="ball">
                        <div className="lines"></div>
                    </div>
                    <div className="shadow"></div>
                </div>
            </div>
            {openModal &&  <Modal/>}
        </div>
        </div>
    );
}

export default Footer;