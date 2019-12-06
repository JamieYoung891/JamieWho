import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { enterSkill } from '../../redux/ui/skill'
import "./Resume.css"
import { Container } from "../styled"
import ResumeProfile from "./ResumeProfile"
import ResumeSectionProjects from "./ResumeSectionProjects"
import ResumeSectionSkills from "./ResumeSectionSkills"
import ResumeSectionOther from "./ResumeSectionOther"


export default function Resume() {
  const { info, portfolio, resume, skills } = useSelector(({ data }) => data)
  const dispatch = useDispatch()

  return (
    <Container.MaxWidth as={"article"}>
      <ResumeProfile data={info} />
      <ResumeSectionProjects data={portfolio.info} />
      <ResumeSectionSkills data={skills} />
      <ResumeSectionOther name={{ title: '교육', subTitle: 'education' }} data={resume.data} />
      <ResumeSectionOther name={{ title: '자격 및 어학', subTitle: 'certification' }} data={resume.data} />
      <ResumeSectionOther name={{ title: '인적사항', subTitle: 'profile' }} data={resume.data} />
    </Container.MaxWidth>
  )
}