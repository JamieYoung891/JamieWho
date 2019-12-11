import React from "react";
import styled from 'styled-components'
import { Container, constants } from '../styled'
import ContactsList from "./ContactsList";

const ContactTitle = styled.div`
  float: left;
  font-weight: 800;
  font-size: 1.6rem;

  > em {
    display: block;
    margin-top: 0.2em;
    font-size: 2rem;
    font-style: normal;
    color: ${constants.color.primary.normal};
  }

  + ul {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`


export default function Contacts() {
  return (
    <Container.FullScreen as="article">
      <Container.PositionCenter as={Container.MaxWidth}>
        <ContactTitle>시간을 내어 주셔서<em>감사합니다!</em></ContactTitle>
        <ContactsList />
      </Container.PositionCenter>
    </Container.FullScreen>
  )
}