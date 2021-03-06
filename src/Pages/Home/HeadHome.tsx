import { useState } from "react";
import "../../baseCss/common.css";
import { IconInfor, IconWork, IconContact } from "../../icon/icon";
import { Link } from "react-router-dom";

function Header() {
  const [changeColor, setChangeColor] = useState("");
  return (
    <div className="header ">
      <div className="nav">
        <ul className="nav-bar">
          <Link
            to="/thongtin"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("infor");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }}
          >
            <IconInfor color={changeColor} />
            <h2
              className={
                "discription" 
              }
              style={{ left: "2.5em" }}
            >
              Thông tin
            </h2>
          </Link>
          <Link
            to="/congviec"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("work");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }}
          >
            <IconWork color={changeColor} />
            <h2 className="discription" style={{ right: "15em" }}>
              Công việc
            </h2>
          </Link>
          <Link
            to="/lienlac"
            className="item-nav"
            onMouseOver={() => {
              setChangeColor("contact");
            }}
            onMouseOut={() => {
              setChangeColor("");
            }}
          >
            <IconContact color={changeColor} />
            <h2 className={"discription"} style={{ right: "2em" }}>
              Trò chuyện
            </h2>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
