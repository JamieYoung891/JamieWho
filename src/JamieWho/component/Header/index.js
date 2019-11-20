import React from 'react';
import { toggleNav } from "../Nav/toggleNav";
import './index.css';

function Header(props) {
  const { contents, info, contentMode, setContentMode } = props.data
  const data = info.website[0]

  function headerClassName() {
    if (contentMode === "intro") return "header-special fade-in"
    else return "header-normal"
  }

  function titleClassName() {
    if (contentMode === "intro") return "text-heading"
    else return "jamie-who-logo button"
  }

  function headerNav() {
    if (contentMode === "intro") {
      let buttons = []

      contents.forEach(item =>
        buttons.push(
          <li
            key={"header_nav_" + item.name}
            className={"header-nav-item button " + item.name}
            onClick={() => {
              let target = document.getElementsByClassName("jamie-who-header-wrapper")[0];
              target.classList.add("fade-out")
              setTimeout(() => {
                target.classList.remove("fade-out")
                setContentMode(item.name)
              }, 1300);
            }}
          >{item.title}</li>
        )
      );

      return (
        <nav className="header-nav fade-in">
          <ul className="header-nav-list">{buttons}</ul>
        </nav>
      )
    } else return
  }

  return (
    <header className={"jamie-who-header " + headerClassName()}>
      <div className="jamie-who-header-wrapper">
        <div
          onClick={contentMode === 'intro' ? null : toggleNav}
          className={"header-title " + titleClassName()}
        >
          <span>{contentMode === 'intro' ? data.title : "J"}</span>
        </div>
        <div className="header-dscrp">
          {data.description}
        </div>
        {headerNav()}
      </div>
    </header>
  )


}

export default Header;