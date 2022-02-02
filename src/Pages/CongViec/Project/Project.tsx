import React, { useState } from "react";
import "./Projet.css";
import content from './Project.json'

function Project() {
    
  return (
    <div className="container" id="resume">
      <h1 className="project-tittle">Project Cá Nhân</h1>
      <h2 className="project-intro">
        Trong quá trình học tập ở trường và luyện tập, tui làm rất nhiều project. Nhưng do không liên quan đến Frontend Website nên không trình bày phía dưới
      </h2>

      {content.map((val) => {
        return (
          <a className="card">
            <a className="card-wrapper-img">
              <img src={val.urlImg} alt="" className="card-img" />
            </a>
            <div className="card-tittle">
            {val.tittle}
            </div>
            <div className="card-desc">
             {val.descript}
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Project;
