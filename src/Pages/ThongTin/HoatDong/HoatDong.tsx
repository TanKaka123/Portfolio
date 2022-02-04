import React from "react";
import MoveTop from "../../../Components/MoveTop/MoveTop";
import content from "./data.json";
import './HoatDong.css'
function HoatDong() {
  return (
    <div className="active">
      {content.map((val) => {
        return(
        <div className="active-wrapper">
          <img src={val["url-img"]} alt={val.name} className="active-img" />
          <h3 className="active-name">{val.name}</h3>
          <h3 className="active-desc">{val.desc}</h3>
        </div>
           )
      })}
      <MoveTop/>
    </div>
  );
}

export default HoatDong;
