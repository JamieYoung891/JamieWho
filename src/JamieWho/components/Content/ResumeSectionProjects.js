import React from 'react'
import styled from 'styled-components'
import ResumeSection from './ResumeSection'
import { Container, Heading, constants } from '../styled'

const ResumeSectionProjectItem = styled(Container.ContentSectionDiv)`

  line-height: 1.3;

  > :first-child {
    margin-bottom: 1rem;

    > h3 { color: ${constants.color.text.lighter}; }

    > a > img {
      margin-left: 0.2rem;
      width: 0.8rem;
      height: 0.8rem;
      vertical-align: top;
    }

    > h4 {
      margin-left: 0.6rem;
      font-weight: 600;

      ::before { content: ': '; }
    }
  }

  > :last-child {
    padding-left: 1rem;

    > :first-child { margin-bottom: 0.4rem; }
    
    > :last-child > em {
      font-weight: 800;
      font-style: normal;
      color: ${constants.color.text.light};
    }
  }
`

const ResumeSectionProjects = ({ data }) => {

  const children = [];

  data.forEach(({ name, title, desc, detail, skills, url }) => {
    children.push(
      <ResumeSectionProjectItem key={`resume-projects__${name}`}>
        <div>
          <Heading.ContentSectionItem1>{title}</Heading.ContentSectionItem1>
          {url && <a href={url}><img src='/external-link.svg' alt='external link' /></a>}
          <Heading.ContentSectionItem2>{desc}</Heading.ContentSectionItem2>
        </div>
        <div>
          <p>{detail}</p>
          <p dangerouslySetInnerHTML={{ __html: skills }} />
        </div>
      </ResumeSectionProjectItem>
    )
  })

  return (
    <ResumeSection name={{ title: '개인 프로젝트', subtitle: 'sideProjects' }}>
      {children}
    </ResumeSection>
  )
}

export default ResumeSectionProjects