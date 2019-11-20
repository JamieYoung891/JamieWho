import React, { useEffect } from 'react';
import { toggleNav } from "./toggleNav";
import { indicateNav } from "./indicateNav";
import "./index.css"
import "./responsive.css"

function Nav({ data }) {
  const { contentMode, setContentMode, contents, content, itemNum, setItemNum } = data;
  const root = document.getElementById("root");

  const className = {
    trigger: {
      hide: "nav-hide",
      indicate: "nav-indicate",
      mainCurrent: "nav-main-current",
      subCurrent: "nav-sub-current"
    },

    set: {

      list: (contentName) => { return !contentName ? "nav-main-contents" : "nav-sub-contents" },

      item: (contentName, i, itemName) => {
        let __className, trg = className.trigger;

        if (!contentName) {
          __className = "nav-main-item button nav-main-item-" + i
          if (itemName === contentMode) __className += " " + trg.mainCurrent

        } else __className = "nav-sub-item button nav-sub-item-" + i

        return __className
      },

      nav: () => {
        const trg = className.trigger;

        switch (contentMode) {
          case "intro":
          case "contacts":
            return trg.hide
          default:
            return trg.indicate
        }
      }

    },
  }

  const

    toContent = (contentName) => {
      setContentMode(contentName);
      toggleNav();
      document.getElementById("root").scrollTo(0, 0);
    },

    toItem = (itemName) => {
      switch (contentMode) {
        case "portfolio":
          for (let i = 0; i < content.index.length; i++)
            if (content.index[i].name === itemName) {
              setItemNum(Object.assign({}, itemNum, { portfolio: i }));
            }
          break;

        default:
          let target = document.getElementsByClassName(`section-${
            itemName.replace(
              /([A-Z])/g,
              (g) => `-${g[0].toLowerCase()}`
            )
            }`)

          if (target.length)
            root.scrollTo(0, target[0].getBoundingClientRect().top + root.scrollTop)

          break;
      }

      if (document.getElementsByClassName("jamie-who-nav")[0].classList.contains("nav-show")) toggleNav();
    }


  const makeList = (contentName) => {
    let itemList = [], data;

    if (contentName && !content) { } else {
      !contentName ? data = contents : data = content.index

      for (let i = 0; i < data.length; i++) {
        const itemData = data[i];

        itemList.push(
          <li
            key={i}
            className={className.set.item(contentName, i, itemData.name)}
            onClick={
              contentName ?
                () => toItem(itemData.name) :
                () => toContent(itemData.name)
            }
          >
            <div className="item-text">{itemData.title}</div>
          </li>
        )
      }
    }

    return (
      <ul className={className.set.list(contentName)}>
        {itemList}
      </ul>
    )
  }



  useEffect(() => { // indicateNave onScroll
    const root = document.getElementById("root"),
      eventFunction = () => indicateNav(className.trigger.subCurrent, contentMode)
    root.addEventListener("scroll", eventFunction)

    return function remove() { root.removeEventListener("scroll", eventFunction) }
  }, [contentMode, className.trigger.subCurrent])

  useEffect(() => { // indicateNave onClick forPortfolio
    if (contentMode !== "portfolio") return

    const indicatorElms = document.getElementsByClassName("nav-sub-contents")[0].children,
      indicatorClassName = className.trigger.subCurrent;

    for (let i = 0; i < indicatorElms.length; i++) {

      if (itemNum.portfolio === i) {
        if (!(indicatorElms[i].classList.contains(indicatorClassName)))
          indicatorElms[i].classList.add(indicatorClassName)
      } else {
        if ((indicatorElms[i].classList.contains(indicatorClassName)))
          indicatorElms[i].classList.remove(indicatorClassName)
      }
    }
  }, [contentMode, itemNum, className.trigger.subCurrent])

  useEffect(() => { // indicateNav reset onChange ofContentMode
    const navSubContents = document.getElementsByClassName("nav-sub-contents")[0];
    if (navSubContents.childElementCount === 0 || contentMode === "portfolio") return


    const indicatorElms = navSubContents.children,
      indicatorClassName = className.trigger.subCurrent;


    for (let i = 0; i < indicatorElms.length; i++) {
      if (i === 0) {
        if (!(indicatorElms[i].classList.contains(indicatorClassName)))
          indicatorElms[i].classList.add(indicatorClassName)
      } else {
        if ((indicatorElms[i].classList.contains(indicatorClassName)))
          indicatorElms[i].classList.remove(indicatorClassName)
      }
    }
  }, [className.trigger.subCurrent, contentMode])



  return (
    <nav className={"jamie-who-nav fade-in " + className.set.nav()} >
      <section className="nav-wrapper">
        <div
          className="nav-logo jamie-who-logo button"
          onClick={() => toContent("intro")}
        >
          <span className="nav-logo-txt">J</span>
        </div>
        {makeList(contentMode)}
        {makeList()}
        <div
          className="nav-close close-button"
          onClick={toggleNav}
        ></div>
      </section>
    </nav>
  )
}

export default Nav;