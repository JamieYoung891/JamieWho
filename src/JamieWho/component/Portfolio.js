import React from "react"
import "../css/Portfolio.css"

import PortfolioItem from "./PortfolioItem"
import { toggleHiddenRight } from "./toggleHiddenRight";

function Portfolio({ data }) {
  const { itemNum, setItemNum, portfolio } = data
  const { info } = portfolio;

  const
    buttons = () => {
      const buttons = []
      for (let i = 0; i < info.length; i++) {
        buttons.push(
          <li
            key={`button-${i}`}
            className={`portfolio-item button ${
              (itemNum.portfolio === i) ? "ticked" : "unticked"
              }`}
            onClick={() => setItemNum(Object.assign({}, itemNum, { portfolio: i }))}
          ></li>
        )
      }

      return (
        <ul className="portfolio-buttons">
          {buttons}
        </ul>
      )
    }
    ,
    template = (dataObject) => {
      return (
        <section className="portfolio-template">
          <div
            className="portfolio-template-img button"
            onClick={() => toggleHiddenRight(
              document.getElementsByClassName("jamie-who-portfolio-item")[0]
            )}
          ></div>
          <div className="portfolio-template-text">
            <div className="portfolio-template-text-heading">
              <div className="portfolio-template-heading-title">{dataObject.title}</div>
              <div className="portfolio-template-heading-desc">{dataObject.desc}</div>
            </div>
            <div className="portfolio-template-text-content">
              <div className="portfolio-template-content-detail">{dataObject.detail}</div>
              {dataObject.skills !== "" ?
                <div
                  className="portfolio-template-content-skills"
                  dangerouslySetInnerHTML={{ __html: dataObject.skills }}
                ></div> :
                null
              }
            </div>
          </div>
        </section>
      )
    }
  return (
    <article className="jamie-who-content content-portfolio fade-in">
      {buttons()}
      {template(info[itemNum.portfolio])}
      <PortfolioItem data={portfolio} itemNum={itemNum.portfolio} setItemNum={setItemNum}></PortfolioItem>
    </article>
  )
}

export default Portfolio