import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setName_content} from '../../redux/ui/content'

import { toggleNav } from "./toggleNav";
import { indicateNav } from "./indicateNav";
import "./index.css"
import "./responsive.css"

function Nav({ data }) {
  const dispatch = useDispatch()
  const setContentName = payload => dispatch(setName_content(payload))
  const contentName = useSelector(({ui}) => ui.content.name)

  const { contents, content, itemNum, setItemNum } = data;
  const root = document.getElementById("root");

  const className = {
    trigger: {
      hide: "nav-hide",
      indicate: "nav-indicate",
      mainCurrent: "nav-main-current",
      subCurrent: "nav-sub-current"
    },

    set: {

      list: (__contentName) => { return !__contentName ? "nav-main-contents" : "nav-sub-contents" },

      item: (__contentName, i, itemName) => {
        let __className, trg = className.trigger;

        if (!__contentName) {
          __className = "nav-main-item button nav-main-item-" + i
          if (itemName === contentName) __className += " " + trg.mainCurrent

        } else __className = "nav-sub-item button nav-sub-item-" + i

        return __className
      },

      nav: () => {
        const trg = className.trigger;

        switch (contentName) {
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

    toContent = (__contentName) => {
      setContentName(__contentName);
      toggleNav();
      document.getElementById("root").scrollTo(0, 0);
    },

    toItem = (itemName) => {
      switch (contentName) {
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


  const makeList = (__contentName) => {
    let itemList = [], data;

    if (__contentName && !content) { } else {
      !__contentName ? data = contents : data = content.index

      for (let i = 0; i < data.length; i++) {
        const itemData = data[i];

        itemList.push(
          <li
            key={i}
            className={className.set.item(__contentName, i, itemData.name)}
            onClick={
              __contentName ?
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
      <ul className={className.set.list(__contentName)}>
        {itemList}
      </ul>
    )
  }



  useEffect(() => { // indicateNave onScroll
    const root = document.getElementById("root"),
      eventFunction = () => indicateNav(className.trigger.subCurrent, contentName)
    root.addEventListener("scroll", eventFunction)

    return function remove() { root.removeEventListener("scroll", eventFunction) }
  }, [contentName, className.trigger.subCurrent])

  useEffect(() => { // indicateNave onClick forPortfolio
    if (contentName !== "portfolio") return

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
  }, [contentName, itemNum, className.trigger.subCurrent])

  useEffect(() => { // indicateNav reset onChange ofContentMode
    const navSubContents = document.getElementsByClassName("nav-sub-contents")[0];
    if (navSubContents.childElementCount === 0 || contentName === "portfolio") return


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
  }, [className.trigger.subCurrent, contentName])



  return (
    <nav className={"jamie-who-nav fade-in " + className.set.nav()} >
      <section className="nav-wrapper">
        <div
          className="nav-logo jamie-who-logo button"
          onClick={() => toContent("intro")}
        >
          <span className="nav-logo-txt">J</span>
        </div>
        {makeList(contentName)}
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