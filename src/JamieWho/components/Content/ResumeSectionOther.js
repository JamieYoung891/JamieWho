import React from 'react'
import styled from 'styled-components'
import { Container, Heading, constants } from '../styled'
import ResumeSection from './ResumeSection'

const ResumeSectionOtherItem = styled(Container.ContentSectionDiv)`
  padding-left: 1rem;

  > :first-child {
    left: -1rem;
    margin-bottom: 1rem;
    color: ${constants.color.text.lighter};
  }

  > :nth-child(2) > * {
    margin-right: 0.5rem;
    font-weight: 400;
    line-height: 1.3;

    :last-child { margin-right: 0; }

    > em {
      font-style: normal;
      font-weight: 800;
    }
  }
`

const ResumeSectionOther = ({ data, name: { title: sectionTitle, subTitle: sectionSubTitle } }) => {
  const filteredData = data.filter(o => o.category === sectionSubTitle);
  const children = [];

  filteredData.forEach(({ subCategory, title, desc }) => {
    children.push(
      <ResumeSectionOtherItem key={`resume-section-${sectionSubTitle}-${subCategory}`}>
        <Heading.ContentSectionItem1>{subCategory}</Heading.ContentSectionItem1>
        <div>
          <Heading.ContentSectionItem1 dangerouslySetInnerHTML={{ __html: title }} />
          {(desc !== '') && <Heading.ContentSectionItem2>{desc}</Heading.ContentSectionItem2>}
        </div>
      </ResumeSectionOtherItem>
    )
  })

  return (
    <ResumeSection name={{ title: sectionTitle, subtitle: sectionSubTitle }}>
      {children}
    </ResumeSection>
  )
}

export default ResumeSectionOther