import React from "react"

import { useSelector } from 'react-redux'
import { leaveProject } from '../../redux/ui/project'

import styled from 'styled-components'
import Description from './Description'
import { Heading, Container } from "../styled"

const ProjectHeading = styled(Container.ContentSectionDiv)`
  > ${Heading.ContentSectionSub} { margin-left: 1rem; }
`

const ProjectContent = styled(Container.ContentSectionDiv)`
  margin-bottom: 2rem;

  > ul {
    margin-top: 1rem;
    margin-left: 1rem;

    line-height: 1.3;

    > li {
      margin-bottom: 0.5rem;

      :last-of-type { margin-bottom: 0; }

      ::before {
        content: '-';
        margin-right: 0.5rem;
      }
    }
  }
`

const DescriptionProject = () => {
  const { name, toShow } = useSelector(({ ui }) => ui.project)
  const { portfolio: { info: database } } = useSelector(({ data }) => data)

  const itemData = database.filter(o => o.name === name)[0]

  if (!name || !itemData) return (
    <Description toShow={toShow} leaveFunction={leaveProject}>
      <Heading.ContentSection>
        There's no data...
      </Heading.ContentSection>
    </Description>
  )

  const arrayMaker = _data => {
    const array = _data.split('\n')

    for (let i = 0; i < array.length; i++)
      array[i] = <li key={i}>{array[i]}</li>

    return array
  }

  return (
    <Description toShow={toShow} leaveFunction={leaveProject}>
      <ProjectHeading>
        <Heading.ContentSection>{itemData.title}</Heading.ContentSection>
        <Heading.ContentSectionSub>{itemData.desc}</Heading.ContentSectionSub>
      </ProjectHeading>
      <ProjectContent>
        <Heading.ContentSectionItem1>Circumstances</Heading.ContentSectionItem1>
        <ul>{arrayMaker(itemData.circumstances)}</ul>
      </ProjectContent>
      <ProjectContent>
        <Heading.ContentSectionItem1>Solutions</Heading.ContentSectionItem1>
        <ul>{arrayMaker(itemData.solutions)}</ul>
      </ProjectContent>
    </Description>
  )
}

export default DescriptionProject