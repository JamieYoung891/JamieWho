// import React from 'react'
import styled from 'styled-components'
import { constants } from './styled'

export default styled.button`
  width: 3rem;
  height: 3rem;

  padding: 0;
  border: 0 hidden transparent;
  background-color: transparent;

  ::before, ::after {
    content: "";
    display: inline-block;

    position: absolute;
    top: 50%;
    right: 0;

    width: 100%;
    height: 20%;
    background-color: ${props => props.color || constants.color.primary.normal};
  }

  ::before {
    transform: translateY(-50%) rotate(-45deg);
  }
  ::after {
    transform: translateY(-50%) rotate(45deg);
  }

  ${props => props.css}
`