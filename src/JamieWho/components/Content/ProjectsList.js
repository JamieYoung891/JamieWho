import React from 'react'

import styled from 'styled-components'
import { Button, constants } from '../styled'
import { buttonCSS_activated } from '../styled/Button';

const ProjectsListContainer = styled.nav`
  ${constants.marginCenter}
`

const ProjectsList = ({ currentProjectName, data, onClick }) => {
  const children = [];
  data.forEach(({ name, title }) => {
    children.push(
      <Button
        as='li'
        key={`projects-nav-${name}`}
        text={name}
        onClick={() => onClick(name)}
        css={
          name === currentProjectName
          && buttonCSS_activated
        }
      >
        {title}
      </Button>
    )
  })

  return (
    <ProjectsListContainer>
      <ul>{children}</ul>
    </ProjectsListContainer>
  )
}

export default ProjectsList