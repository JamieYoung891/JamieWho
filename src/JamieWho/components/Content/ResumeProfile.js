import React from 'react'
import { Container, Heading } from '../styled'
import ContactsList from './ContactsList'
import styled from 'styled-components'

const DevImage = styled.img`
  width: 6rem;
  height: 6rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  vertical-align: top;
`

const DevInfo = styled.div`
  display: inline-block;

  > :first-child { margin-right: 0.5rem; }
  
  > :nth-child(3) {
    display: block;
    width: max-content;
    margin-top: 0.2rem;

    ::before { content: ': '; }
  }

  + ul {
    position: absolute;
    right: 0;
    bottom: 3rem;
  }
`

const ResumeProfile = ({ data: { developer: [data] } }) => {

  return (
    <Container.ContentSection>
      <DevImage src={data.imgURL} />
      <DevInfo>
        <Heading.ContentSection>{data.nameKr}</Heading.ContentSection>
        <Heading.ContentSectionSub>{data.nameEn}</Heading.ContentSectionSub>
        <span>{data.titleEn.toLowerCase()}</span>
      </DevInfo>
      <ContactsList />
    </Container.ContentSection>
  )
}

export default ResumeProfile