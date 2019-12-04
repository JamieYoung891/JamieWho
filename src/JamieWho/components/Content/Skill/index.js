import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { leaveSkill } from '../../../redux/ui/skill'

import { makeListElm } from "./makeListElm"
// import "./index.css"

export default function SkillsDescription() {
  const { index, education } = useSelector(({ data }) => data.skills)
  const { name, toShow } = useSelector(({ ui }) => ui.skill);
  const dispatch = useDispatch()

  const basicData = index.filter(o => o.name === name)[0],
    eduData = education.filter(o => o.skill === name);

  // const projectElms = makeListElm("Education", eduData)
  const eduElms = makeListElm("Education", eduData)

  const insertData = (data, dataName) => {
    if (dataName) return data ? data[dataName] : null
    else return data ? data : null
  }



  return (
    <article
      id="technical-skills-description"
      className={
        `jamie-who-description technical-skills-description ${
        toShow ? "description-show" : "description-hide"
        }`
      }
    ><div className="wrapper">
        <section className="title">
          <div className="title">{insertData(basicData, "title")}</div>
          <div className="category">{insertData(basicData, "category")}</div>
          {
            basicData ?
              (() => {
                return basicData.subCategory === "" ? null :
                  <div className="sub-category">
                    {(basicData.subCategory).toLowerCase()}
                  </div>
              })() : null
          }
        </section>
        <section className="comment">{insertData(basicData, "comment")}</section>
        <section className="description">
          {/* {projectElms} */}
          {insertData(eduElms)}
        </section>
        <div
          className="close-button"
          onClick={
            () => {
              document.getElementById("technical-skills-description").classList.replace("description-show", "description-hide");
              setTimeout(() => { dispatch(leaveSkill()) }, 500);
            }
          }
        ></div>
      </div>
    </article>
  )
}