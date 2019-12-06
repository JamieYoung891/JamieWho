import React from 'react'
import styled from 'styled-components'
import { Container, Heading } from '../styled'
import { color } from '../styled/constants'

const ResumeSection = styled(Container.ContentSection)`
  padding-left: 1rem;

  > :first-child {
    top: 0;
    left: -1rem;
    margin-bottom: 1rem;


    > :first-child {
      margin-right: 0.5rem;
      font-size: 1.6rem;

      color: ${color.text.lighter};
    }
    > :last-child { font-size: 1.2rem; }
  }

  > :last-child {
    padding: 2rem 1rem;

    ::before {
      content: "";

      position: absolute;
      top: 0;
      left: 0;

      width: 0.2rem;
      height: 100%;
      background-color: ${color.text.lighter};
      opacity: 0.4;
    }
  }
`

export default ({ name: { title, subtitle }, children }) => (
  <ResumeSection>
    <div>
      <Heading.ContentSection>{title}</Heading.ContentSection>
      <Heading.ContentSectionSub>{subtitle}</Heading.ContentSectionSub>
    </div>
    <div>
      {children}
    </div>
  </ResumeSection>
)