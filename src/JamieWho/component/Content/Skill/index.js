import React from "react"
import { makeListElm } from "./makeListElm"
import "./index.css"

export default function SkillsDescription({ data }) {
  const { index, education } = data.skills, { itemNum, setItemNum } = data;

  const basicData = index.filter(o => o.name === itemNum.skills)[0],
    eduData = education.filter(o => o.skill === itemNum.skills);

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
        basicData ? "description-show" : "description-hide"
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
              setTimeout(() => {
                setItemNum(
                  Object.assign({}, itemNum, { skills: false })
                )
              }, 500);
            }
          }
        ></div>
      </div>
    </article>
  )
}