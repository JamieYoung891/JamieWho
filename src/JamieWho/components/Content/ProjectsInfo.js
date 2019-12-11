import React from 'react'
import styled from 'styled-components'
import { Container, Heading, constants } from '../styled'

const ProjectsInfoContainer = styled(Container.ContentSectionDiv)`

  ${constants.marginCenter}
  
  > img {
    cursor: pointer;
    display: block;
    width: 12rem;
    height: 8rem;
    margin: 0 auto 2rem;
    border-radius: 1rem;
    background-color: ${constants.color.primary.lighter};
  }

  > section > div.heading {
    margin-bottom: 0.6rem;

    > * {
      display: block; 
      width: 100%;
    }

    > ${Heading.ContentSection} {
      font-size: 1.3rem;
      margin-bottom: 0.3rem;
    }

    > ${Heading.ContentSectionSub} {
      font-size: 1.1rem;

      ::before {
        content: ':';
        margin-right: 0.5em;
      }
    }
  }
`

const ProjectsInfo = ({ currentProjectName, data, onClick }) => {
  const _data = data.find(o => o.name === currentProjectName)

  return (
    <ProjectsInfoContainer>
      <img src={_data.imgMain} alt={`${_data.title} thumbnail`} onClick={onClick} />
      <section>
        <div className='heading'>
          <Heading.ContentSection>{_data.title}</Heading.ContentSection>
          <Heading.ContentSectionSub>{_data.desc}</Heading.ContentSectionSub>
        </div>
        <div className='detail'>{_data.detail}</div>
      </section>
    </ProjectsInfoContainer>
  )
}

export default ProjectsInfo