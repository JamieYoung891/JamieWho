import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { enterSkill } from '../../redux/ui/skill'
import "./Resume.css"
import { Container } from "../styled"
import ResumeProfile from "./ResumeProfile"


export default function Resume() {
  const { info, portfolio, resume, skills } = useSelector(({ data }) => data)
  const dispatch = useDispatch()

  const sectionElms = () => {

    const sectionInfoData = resume.index,
      elms = [];

    const templete = (sectionInfo) => {

      const
        itemElmsArray = [],

        key = sectionInfo.name.replace(
          /([A-Z])/g,
          (g) => `-${g[0].toLowerCase()}`
        )


      switch (sectionInfo.name) {

        case "sideProjects":
          const
            projectsData = portfolio.info;

          for (let i = 0; i < projectsData.length; i++) {
            const item = projectsData[i]

            itemElmsArray.push(
              <div key={`${key}-${i}`} className={`list-item list-item-${key}`}>
                <dt>
                  <span>{item.title}</span>
                  <span>{item.desc}</span>{
                    item.url === "" ? null :
                      <a href={`/${item.url}`} target="_blank" rel="noopener noreferrer"><span className="outer-link"></span></a>
                  }
                </dt>
                <dd>
                  <ul>
                    <li>{item.detail}</li>
                    {item.skills !== "" ? <li dangerouslySetInnerHTML={{ __html: item.skills }}></li> : ""}
                  </ul>
                </dd>
              </div>
            )
          }
          break;

        case "technicalSkills":
          const skillsData = skills.index, skillsCategory = ["Client-Side", "Server-Side", "Development-Tool"];

          for (let i = 0; i < skillsCategory.length; i++) {
            const
              subCategory = skillsData.filter(
                o => o.subCategory === skillsCategory[i]
              ),
              categoryItemElmsArray = [];

            for (let j = 0; j < subCategory.length; j++) {
              const item = subCategory[j];

              categoryItemElmsArray.push(
                <li
                  key={`${key}-${i}-${j}`}
                  onClick={() => dispatch(enterSkill(item.name))}
                  className="button"
                >
                  {(() => {
                    if (item.em) return <em>{item.title}</em>
                    else return item.title
                  })()}
                </li>
              )
            }

            itemElmsArray.push(
              <li
                key={`${key}-${i}`}
                className={`list-item list-item-${key}`}
              >
                <div className="sublist-title">{skillsCategory[i]}</div>
                <ul>
                  {categoryItemElmsArray}
                </ul>
              </li>
            )
          }
          break;

        default:
          let resumeData = resume.data.filter(
            o => o.category === sectionInfo.name
          );

          for (let i = 0; i < resumeData.length; i++) {
            const item = resumeData[i];
            let desc = [];

            if (!(item.desc.includes(", "))) desc.push(item.desc)
            else desc = item.desc.split(", ")

            for (let i = 0; i < desc.length; i++)
              desc[i] = <span key={i}>{desc[i]}</span>

            itemElmsArray.push(
              <li
                key={`${key}-${i}`}
                className={`list-item list-item-${key}`}
              >
                <div className="list-item-title"><span>{item.subCategory}</span></div>
                <div className="list-item-desc">
                  <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                  {desc}
                </div>
              </li>
            )
          }
          break;
      }

      return (
        <section key={key} className={`resume-section section-${key}`}>
          <div className={`resume-section-wrapper section-${key}-wrapper`}>
            <div className={`section-list-title list-${key}-title`}>
              <span>{sectionInfo.titleKr}</span>
              <span>{sectionInfo.name}</span>
            </div>
            <ul className={`section-list list-${key}`}>
              {itemElmsArray}
            </ul>
          </div>
        </section>
      )
    };

    for (let i = 1; i < sectionInfoData.length; i++)
      elms.push(templete(sectionInfoData[i]))

    return elms
  }


  return (

    <Container.MaxWidth as={"article"}>
      <ResumeProfile data={info} />
      {sectionElms()}
    </Container.MaxWidth>
  )
}