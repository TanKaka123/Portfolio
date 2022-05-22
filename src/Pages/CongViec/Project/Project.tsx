import "./Projet.css";
import content from './Project.json'
import MoveTop from "../../../Components/MoveTop/MoveTop";

function Project() {
    
  return (
    <div className="container" id="resume">
      <h2 className="project-intro">
        Trong quá trình học tập ở trường và tập luyện, đã hoàn thành rất nhiều project. Nhưng do không liên quan đến Frontend Website nên không trình bày phía dưới
      </h2>

      {content.map((val) => {
        return (
          <a className="card" href={val.urlWeb} target="_blank" rel="noreferrer" >
            <div className="card-wrapper-img">
              <img src={val.urlImg} alt="" className="card-img" />
            </div>
            <div className="card-tittle">
            {val.tittle}
            </div>
            <div className="card-desc">
             {val.descript}
            </div>
          </a>
        );
      })}
       <MoveTop/>
    </div>
  );
}

export default Project;
