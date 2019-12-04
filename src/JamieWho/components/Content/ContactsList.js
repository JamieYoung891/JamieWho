import React from 'react'
import { Button } from '../styled';
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const ContactsUl = styled.ul`
  height: 2rem;

  > li {
    transition-duration: 0.5s;
    transition-property: max-width, margin-right, opacity, color;

    :hover { margin-right: 1em }

    > a {
      color: currentColor;
      text-decoration: none;
    }
  }
`

export default function ContactsList() {
  const { contact: data } = useSelector(({ data }) => data.info)

  const elms = [];

  data.forEach(
    ({ name, address, prefix }) => elms.push(
      <Button
        as='li'
        text={name}
        key={`contact-anchor-${name.toLowerCase()}`}
      >
        <a href={prefix + address}>
          <span>{name}</span>
        </a>
      </Button>
    )
  )

  return <ContactsUl>{elms}</ContactsUl>
} 