import React from 'react'

import { useSelector } from 'react-redux'
import { leaveSkill } from '../../redux/ui/skill'

import styled from 'styled-components'
import { Heading, Container, constants } from '../styled'
import Description from './Description'

const SkillHeading = styled(Container.ContentSectionDiv)`
  > ${Heading.ContentSection}:nth-child(2) {
    margin-left: 1rem;
    font-size: 1.2rem;
    color: ${constants.color.text.lighter}
  }
`
const SkillComment = styled(Container.ContentSectionDiv)`
  line-height: 1.5;
  text-indent: 2rem;
  text-align: justify;
`

const SkillEducation = styled(Container.ContentSectionDiv)`
  > ${Heading.ContentSectionItem1} {
    margin-bottom: 1rem;
    color: ${constants.color.text.lighter};
  }

  > ul > li {
    height: max-content;
    margin-bottom: 0.5rem;
    line-height: 1.2;

    margin-bottom: 0.5rem;

    :last-of-type { margin-bottom : 0; }
  }

  > ul > li > div.date {
    float: left;
    height: 100%;
    margin-right: 1rem;
  }

  > ul > li > div.heading {
    text-align: right;

    > ${Heading.ContentSectionItem2} { display: inline-block; }

    > a > img {
      width: 0.5rem;
      height: 0.5rem;
      vertical-align: top;
    }

    > span.institution { margin-left: 0.5rem; }
  }
`

const DescriptionSkill = () => {
  const { name, toShow } = useSelector(({ ui }) => ui.skill)
  const { skills: { index, education } } = useSelector(({ data }) => data)

  const itemData_basic = index.filter(o => o.name === name)[0]
  const itemData_edu_array = education.filter(o => o.skill === name)

  if (!name || !itemData_basic) return (
    <Description toShow={toShow} leaveFunction={leaveSkill}>
      <Heading.ContentSection>
        There's no data...
      </Heading.ContentSection>
    </Description>
  )

  const { title, category, subCategory, comment } = itemData_basic

  const getEducation = () => {
    if (!itemData_edu_array.length) return

    const listItems = []

    itemData_edu_array.forEach(o => listItems.push(
      <li key={o.title}>
        <div className='date'>{o.date}</div>
        <div className='heading'>
          <Heading.ContentSectionItem2>{o.title}</Heading.ContentSectionItem2>
          {o.certification === 'TRUE' && <a href={o.src}><img src='/external-link.svg' alt={o.title} /></a>}
          {o.institution !== '' && <span className='institution'>{o.institution}</span>}
        </div>
      </li>
    ))

    return (
      <SkillEducation>
        <Heading.ContentSectionItem1>Education</Heading.ContentSectionItem1>
        <ul>{listItems}</ul>
      </SkillEducation>
    )
  }

  return (
    <Description toShow={toShow} leaveFunction={leaveSkill}>
      <SkillHeading>
        <Heading.ContentSection>{title}</Heading.ContentSection>
        <Heading.ContentSection>{category} / {subCategory}</Heading.ContentSection>
      </SkillHeading>
      {comment && <SkillComment>{comment}</SkillComment>}
      {getEducation()}
    </Description>
  )
}

export default DescriptionSkill