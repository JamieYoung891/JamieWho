import React from 'react'
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

function JamieWho() {
  const { content: { name: contentName }, loader: { max, loaded } } = useSelector(({ ui }) => ui)
  useData();

  const componentInserter = () => {
    if (max && max === loaded) {
      const componentNames = [], components = [];

      if (contentName === "intro") componentNames.push("header")
      else if (contentName === "contacts") Object.assign(componentNames, ["header", "nav", "content"])
      else Object.assign(componentNames, ["header", "nav", "content", "footer", "skillsDescription"])

      componentNames.forEach(componentName => {
        if (componentName === "content") componentName = contentName;

        switch (componentName) {

          case "header":
            components.push(<Header key={componentName} />)
            break;
          case "nav":
            components.push(<Nav key={componentName} />)
            break;
          case "footer":
            components.push(<Footer key={componentName} />)
            break;

          case "intro":
            break;
          case "resume":
            components.push(<Resume key={contentName} />)
            break;
          case "portfolio":
            components.push(<Portfolio key={contentName} />)
            break;
          case "narrative":
            components.push(<Narrative key={contentName} />)
            break;
          case "contacts":
            components.push(<Contact key={contentName} />)
            break;

          case "skillsDescription":
            components.push(<SkillsDescription key={componentNames} />)
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