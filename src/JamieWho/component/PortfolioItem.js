import React from "react"
import "../css/PortfolioItem.css"
import { toggleHiddenRight } from "./toggleHiddenRight";

function PortfolioItem(props) {
  const { data, itemNum, setItemNum } = props;
  const info = data.info[itemNum],
    arrayMaker = (target, name) => {
      let elmArray = (target.split("\n"))

      for (let i = 0; i < elmArray.length; i++)
        elmArray[i] = (
          <li
            key={`${name}-${i}`}
            className={`list-item`}
          >{elmArray[i]}</li>
        )

      return elmArray
    };
  const circumstances = arrayMaker(info.circumstances, "circumstances"),
    solutions = arrayMaker(info.solutions, "solutions");

  return (
    <section className="jamie-who-portfolio-item show-right hidden-right">
      <div className="jamie-who-portfolio-item-title">
        <div className="name">{info.title}</div>
        <div className="desc">{info.desc}</div>
      </div>
      <div className="jamie-who-portfolio-item-desc">
        <div className="circumstances">
          <div className="title">circumstances</div>
          <ul className="list">
            {circumstances}
          </ul>
        </div>
        <div className="solutions">
          <div className="title">solutions</div>
          <ul className="list">
            {solutions}
          </ul>
        </div>
        <div className="narrative"></div>
      </div>
      <div className="jamie-who-portfolio-item-nav">
        {itemNum > 0 ?
          <div
            className="before button"
            onClick={() => setItemNum(itemNum - 1)}
          ></div> : null
        }
        {itemNum < data.info.length - 1 ?
          <div
            className="after button"
            onClick={() => setItemNum(itemNum + 1)}
          ></div> : null
        }
      </div>
      <div
       className="close-button"
       onClick={()=> toggleHiddenRight(
         document.getElementsByClassName("jamie-who-portfolio-item")[0]
       )}
      ></div>
    </section>
  )
}

export default PortfolioItem