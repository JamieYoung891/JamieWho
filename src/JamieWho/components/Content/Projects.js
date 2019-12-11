import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from '../styled'

import ProjectsList from './ProjectsList'
import ProjectsInfo from './ProjectsInfo'
import { setName_project, toggleToShow_project } from '../../redux/ui/project'

const Projects = () => {
  const { project: { name } } = useSelector(({ ui }) => ui)
  const { portfolio: { index, info } } = useSelector(({ data }) => data)

  const dispatch = useDispatch()
  const setName = payload => dispatch(setName_project(payload))
  const toggleToShow = () => dispatch(toggleToShow_project())

  if (name === null) {
    setName(index[0].name)

    return (
      <div>loading...</div>
    )
  }

  return (
    <Container.ContentSection as='article'>
      <Container.MaxWidth>
        <ProjectsInfo currentProjectName={name} data={info} onClick={toggleToShow} />
        <ProjectsList currentProjectName={name} data={index} onClick={setName} />
      </Container.MaxWidth>
    </Container.ContentSection>
  )
}

export default Projects