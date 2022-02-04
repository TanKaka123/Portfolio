import React, { useState } from 'react';
import './MoveTop.css'
function MoveTop() {
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  };
    
  window.addEventListener('scroll', toggleVisible);
    const handleClick=()=>{
        document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
    }
    return (
        <div>
            <img src="./move.png" alt="move-top-btn" className="move-top" id="move-btn" onClick={handleClick} style={{display: visible ? 'inline' : 'none'}}/>
        </div>
    );
}

export default MoveTop;