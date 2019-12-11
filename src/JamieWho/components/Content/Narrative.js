import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { enterSkill } from '../../redux/ui/skill'
import { Container } from '../styled'
import NarrativeSection from './NarrativeSection'
import Projects from './Projects'

const Narrative = () => {
  const { narrative: { intro, technicalSkills, imagination, theFuture }, skills } = useSelector(({ data }) => data)
  const dispatch = useDispatch()
  const onClick_skill = payload => dispatch(enterSkill(payload))

  return (
    <Container.MaxWidth as='article'>
      <NarrativeSection data={intro} />
      <NarrativeSection data={technicalSkills} skillsData={skills} onClick={onClick_skill} />
      <NarrativeSection data={imagination} />
      <NarrativeSection data={theFuture} />
      <Projects />
    </Container.MaxWidth>
  )
}

export default Narrative