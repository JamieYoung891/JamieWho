import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ContactsList from '../Content/ContactsList'

const FooterContectSection = styled.section`
  text-align: right;

  > :first-child {
    float: right;

    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    text-align: right;

    > :first-child {
      display: flex;
      flex-direction: column-reverse;

      > :first-child {
        font-size: 1.6rem;
        margin-top: 0.1rem;
      }
    }
  }

  > :nth-child(2) {
    clear: both;
    padding-top: 1rem;
  }
`

export default function FooterContent() {
  const {
    contact,
    developer: [
      {
        nameEn: name,
        titleEn: title
      }
    ]
  } = useSelector(({ data }) => data.info)

  return (
    <FooterContectSection>
      <section>
        <div>
          <div>{name}</div>
          <div>{title.toLowerCase()}</div>
        </div>
        <ContactsList data={contact} />
      </section>
      <section>© 2019 <span>{name}</span>, All Rights Reserved.</section>
    </FooterContectSection>
  )
}