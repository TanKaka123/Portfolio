import  { useState } from "react";
import {
  IconGithub,
  IconMail,
  IconLinkedin,
  IconBack,
  IconBackMobile,
} from "../../icon/icon";
import "../../baseCss/common.css";
import { Link } from "react-router-dom";

function Header() {
  const [changeColor, setChangeColor] = useState("");
  return (
    <div>
      <div className="header ">
        <Link className="icon-back" to={"/"}>
          <IconBack />
        </Link>
        <Link className="icon-back-mobile" to={"/"}>
          <IconBackMobile />
        </Link>

        <div className="Tittle-LienLac">Thông Tin Liên Lạc</div>
        <div className="nav">
          <ul className="nav-bar">
            <a
              href="https://github.com/TanKaka123"
              target="_blank"
              className="item-nav"
              onMouseOver={() => {
                setChangeColor("github");
              }}
              onMouseOut={() => {
                setChangeColor("");
              }}
              rel="noreferrer"
            >
              <IconGithub color={changeColor} />
              <h2 className="discription" style={{ left: "3.2em" }}>
                Github
              </h2>
            </a>
            <a
              href="mailto:hongtan1422002@gmail.com?"
              target="_blank"
              className="item-nav"
              onMouseOver={() => {
                setChangeColor("mail");
              }}
              onMouseOut={() => {
                setChangeColor("");
              }}
              rel="noreferrer"
            >
              <IconMail color={changeColor} />
              <h2
                className="discription"
                style={{ right: "16em", bottom: "0" }}
              >
                Email
              </h2>
            </a>
            <a
              href="https://www.linkedin.com/in/nguyenhongtan/"
              target="_blank"
              className="item-nav"
              onMouseOver={() => {
                setChangeColor("linkedin");
              }}
              onMouseOut={() => {
                setChangeColor("");
              }}
              rel="noreferrer"
            >
              <IconLinkedin color={changeColor} />
              <h2
                className="discription"
                style={{ right: "2.8em", bottom: "0" }}
              >
                Linkedin
              </h2>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
