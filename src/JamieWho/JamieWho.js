import React, { useState } from 'react'
import { useData } from "./hooks/useData"

import "./css/JamieWho.css"

import LoadIndicator from "./component/LoadIndicator"
import Header from "./component/Header"
import Nav from "./component/Nav"
import Footer from "./component/Footer"

import Resume from "./component/Resume"
import Portfolio from "./component/Portfolio"
import Narrative from "./component/Narrative"
import Contacts from "./component/Contacts"
import SkillsDescription from './component/description/SkillsDescription'

function JamieWho(props) {
  // const { setAppMode } = props
  const [contentMode, setContentMode] = useState("intro");
  const { data, loadInfo } = useData(); // getData from Google Spreadsheet using Tabletop
  const [itemNum, setItemNum] = useState({portfolio: 0, skills: false});

  const componentInserter = () => {
    if (loadInfo.isDataReady) {
      const componentNames = [], components = [];

      if (contentMode === "intro") componentNames.push("header")
      else if (contentMode === "contacts") Object.assign(componentNames, ["header", "nav", "content"])
      else Object.assign(componentNames, data.layout);

      componentNames.forEach(componentName => {
        if (componentName === "content") componentName = contentMode;

        const __data = {}, dataNames = data.componentData[componentName];
        for (let i = 0; i < dataNames.length; i++) {
          let item = false;

          const key = dataNames[i];
          switch (key) {
            case "contentMode": item = contentMode; break;
            case "setContentMode": item = setContentMode; break;

            case "itemNum": item = itemNum; break;
            case "setItemNum": item = setItemNum; break;

            case "content":
              if (!data[contentMode]) break;
              else item = data[contentMode]
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
            components.push(<Resume key={contentMode} data={__data}></Resume>)
            break;
          case "portfolio":
            components.push(<Portfolio key={contentMode} data={__data}></Portfolio>)
            break;
          case "narrative":
            components.push(<Narrative key={contentMode} data={__data}></Narrative>)
            break;
          case "contacts":
            components.push(<Contacts key={contentMode} data={__data}></Contacts>)
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
    <LoadIndicator data={loadInfo}></LoadIndicator>
    {componentInserter()}
  </div>

}

export default JamieWho;