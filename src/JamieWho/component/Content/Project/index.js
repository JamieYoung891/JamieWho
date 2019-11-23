import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { enterProject } from '../../../redux/ui/project'
import "./index.css"
import { toggleHiddenRight } from "../../Nav/toggleHiddenRight";

function PortfolioItem() {
  const { portfolio: data } = useSelector(({ data }) => data)
  const { name: itemNum } = useSelector(({ ui }) => ui.project)
  const dispatch = useDispatch()

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
        {
          info.url !== "" &&
          <div><a href={`/${info.url}`} target="_blank" rel="noopener noreferrer"><span className="outer-link"></span></a></div>
        }
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
            onClick={() => dispatch(enterProject(itemNum - 1))}
          ></div> : null
        }
        {itemNum < data.info.length - 1 ?
          <div
            className="after button"
            onClick={() => dispatch(enterProject(itemNum - 1))}
          ></div> : null
        }
      </div>
      <div
        className="close-button"
        onClick={() => toggleHiddenRight(
          document.getElementsByClassName("jamie-who-portfolio-item")[0]
        )}
      ></div>
    </section>
  )
}

export default PortfolioItem