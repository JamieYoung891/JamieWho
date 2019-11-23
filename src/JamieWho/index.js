import React, { useState } from 'react'
import useData from "./hooks/useData"
import { useSelector } from 'react-redux'

import "./index.css"

import LoadIndicator from "./component/Loader"
import Header from "./component/Header"
import Nav from "./component/Nav"
import Footer from "./component/Footer"

import Resume from "./component/Content/Resume"
import Portfolio from "./component/Content/Projects"
import Narrative from "./component/Content/Narrative"
import Contact from "./component/Content/Contacts"
import SkillsDescription from './component/Content/Skill'

function JamieWho(props) {
  const contentName = useSelector(({ ui }) => ui.content.name)

  const { data, loadInfo } = useData(); // getData from Google Spreadsheet using Tabletop
  const [itemNum, setItemNum] = useState({ portfolio: 0, skills: false });

  const componentInserter = () => {
    if (loadInfo.isDataReady) {
      const componentNames = [], components = [];

      if (contentName === "intro") componentNames.push("header")
      else if (contentName === "contacts") Object.assign(componentNames, ["header", "nav", "content"])
      else Object.assign(componentNames, data.layout);

      componentNames.forEach(componentName => {
        if (componentName === "content") componentName = contentName;

        const __data = {}, dataNames = data.componentData[componentName];
        for (let i = 0; i < dataNames.length; i++) {
          let item = false;

          const key = dataNames[i];
          switch (key) {
            case "itemNum": item = itemNum; break;
            case "setItemNum": item = setItemNum; break;

            case "content":
              if (!data[contentName]) break;
              else item = data[contentName]
              break;

            default: item = data[key]
              break;
          }

          __data[key] = item
        }

        switch (componentName) {

          case "header":
            components.push(<Header key={componentName} data={__data}></Header>)
            break;
          case "nav":
            components.push(<Nav key={componentName} data={__data}></Nav>)
            break;
          case "footer":
            components.push(<Footer key={componentName} data={__data}></Footer>)
            break;

          case "intro":
            break;
          case "resume":
            components.push(<Resume key={contentName} data={__data}></Resume>)
            break;
          case "portfolio":
            components.push(<Portfolio key={contentName} data={__data}></Portfolio>)
            break;
          case "narrative":
            components.push(<Narrative key={contentName} data={__data}></Narrative>)
            break;
          case "contacts":
            components.push(<Contact key={contentName} data={__data}></Contact>)
            break;

          case "skillsDescription":
            components.push(<SkillsDescription key={componentNames} data={__data}></SkillsDescription>)
            break;

          default:
            break;
        }
      });


      return components
    } else return
  }

  return <div className="jamie-who">
    <LoadIndicator />
    {componentInserter()}
  </div>

}

export default JamieWho;