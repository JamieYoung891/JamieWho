import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { enterSkill } from '../../../redux/ui/skill'

import "./index.css";

import Portfolio from "../Projects"

function Narrative() {
  const { narrative, skills } = useSelector(({ data }) => data);
  const dispatch = useDispatch()

  const makeSection = () => {

    const sectionInfoData = narrative.index,
      elms = [];



    const templete = (sectionInfo) => {

      const
        itemElmsArray = [],

        key = sectionInfo.name.replace(
          /([A-Z])/g,
          (g) => `-${g[0].toLowerCase()}`
        )

      const narrativeData = narrative.narrative.filter(
        o => o.section === sectionInfo.name
      );



      for (let i = 0; i < narrativeData.length; i++) {
        const item = narrativeData[i];



        if (item.isList) {
          const list = skills.index.filter(
            o => o.category === item.sentence
          ), listElms = [];

          for (let i = 0; i < list.length; i++)
            listElms[i] = (
              <li
                key={`${item.sentence}-${i}`}
                className={"narrative-section-skills-list-item skills-list-item button"}
                onClick={() => dispatch(enterSkill(list[i].name))}
              >{list[i].em ?
                <em>{list[i].title}</em> :
                <span>{list[i].title}</span>}
              </li>
            )


          itemElmsArray.push(
            <ul
              key={`${key}-${i}`}
              className={`narrative-section-item narrative-section-skills-list ${item.sentence}-skills-list`}
            >{listElms}
            </ul>
          )



        } else {
          let itemElm = [];

          if (!(item.sentence.includes("\n"))) itemElm.push(item.sentence)
          else itemElm = item.sentence.split("\n")

          for (let i = 0; i < itemElm.length; i++) {
            if (itemElm[i].includes('"')) {

              let itemElms = itemElm[i].split('"');
              itemElm[i] = (
                <span key={i}>
                  {itemElms[0]}
                  <em>{itemElms[1]}</em>
                  {itemElms[2]}
                </span>
              )

            } else itemElm[i] = <span key={i}>{itemElm[i]}</span>
          }


          itemElmsArray.push(
            <div
              key={`${key}-${i}`}
              className={`narrative-section-item ${item.className}`}
            >{itemElm}
            </div>
          )
        }
      }



      return (
        <section key={key} className={`narrative-section section-${key}`}>
          <div className={`narrative-section-signpost`}>
            <div className={`narrative-section-signpost-text`}>
              {sectionInfo.title}
            </div>
          </div>
          <div className={`narrative-section-wrapper`}>
            {itemElmsArray}
          </div>
        </section>
      )
    };



    for (let i = 0; i < sectionInfoData.length; i++)
      elms.push(templete(sectionInfoData[i]))

    elms.push(
      <Portfolio key="portfolio" />
    );

    return elms
  }

  return (
    <article className="jamie-who-content content-narrative fade-in">
      {makeSection()}
    </article>
  )
}

export default Narrative;