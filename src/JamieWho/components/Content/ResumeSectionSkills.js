import React from 'react'
import styled from 'styled-components'
import ResumeSection from './ResumeSection'
import { Container, Heading, Anchor, constants } from '../styled'

const ResumeSectionSkillsCategory = styled(Container.ContentSectionDiv)`

  > h3 {
    color: ${constants.color.text.lighter}; 
    margin-bottom: 1rem;
  }

  > ul {
    padding-left: 1rem; 
    line-height: 1.3;
  }

  > ul  > li {
    display: inline-block;
    margin-right: 0.5em;

    font-size: 1.3rem;
    color: ${constants.color.text.light};

    ::after{ content: ","; }
    
    :last-child::after { content: none; }

    > a > em {
      font-weight: 800;
      font-style: normal;
    }
  }
`

const ResumeSectionSkills = ({ data: { category, index: skillsArray }, onClick }) => {
  const children = [], _category = category.filter(o => o.category === 'sub')

  _category.forEach(({ name: categoryName }) => {
    const skills = skillsArray.filter(o => o.subCategory === categoryName);
    const categoryChildren = [];

    skills.forEach(({ name, title, em }) => {
      categoryChildren.push(
        <li key={`resume-section-skills-${categoryName}-${name}`}>
          <Anchor.Translate
            href={`#skills?${name}`}
            onClick={() => onClick.skill(name)}
          >
            {em ? <em>{title}</em> : title}
          </Anchor.Translate>
        </li>
      )
    })

    children.push(
      <ResumeSectionSkillsCategory
        key={`resume-section-skills-${categoryName}`}
      >
        <Heading.ContentSectionItem1>
          {categoryName}
        </Heading.ContentSectionItem1>
        <ul>
          {categoryChildren}
        </ul>
      </ResumeSectionSkillsCategory>
    )
  })

  return (
    <ResumeSection name={{ title: '기술 역량', subtitle: 'technicalSkills' }}>
      {children}
    </ResumeSection>
  )
}

export default ResumeSectionSkills