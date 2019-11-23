import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { enterProject } from '../../../redux/ui/project'
import "./index.css"

import PortfolioItem from "../Project"
import { toggleHiddenRight } from "../../Nav/toggleHiddenRight";

export default function Projects() {
  const { info } = useSelector(({ data }) => data.portfolio);
  const name = useSelector(({ ui }) => ui.project.name)
  const dispatch = useDispatch();

  const
    buttons = () => {
      const buttons = []
      for (let i = 0; i < info.length; i++) {
        buttons.push(
          <li
            key={`button-${i}`}
            className={`portfolio-item button ${
              (name === i) ? "ticked" : "unticked"
              }`}
            onClick={() => dispatch(enterProject(i))}
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
              <div className="portfolio-template-heading-title">{dataObject.title}{
                dataObject.url === "" ? null :
                  <a href={`/${dataObject.url}`} target="_blank"><span className="outer-link"></span></a>
              }</div>
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
      {template(info[name])}
      <PortfolioItem />
    </article>
  )
}