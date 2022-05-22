import Tittle from "../../Components/Tittle/Tittle";
import Footer from "../../Components/Footer/Footer";
import HongTan from "../../Components/HongTan/HongTan";
import "./CongViec.css";
import Header from "./HeadingCongViec";
import Project from "./Project/Project";
import { useState } from "react";

function CongViec() {
  const [openProject, setOpenProject] = useState(false);
  return (
    <div>
      <Tittle />
      <div className="contain-heading">
        <Header openProject={setOpenProject} />
      </div>
      <HongTan />
      <Footer />
      {openProject && <Project />}
    </div>
  );
}

export default CongViec;
