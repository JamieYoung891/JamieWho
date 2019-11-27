import React, { Fragment } from 'react'
import styled from 'styled-components'
import * as constants from './constants'

const StyledButton = styled.li`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  width: 0;
  padding-left: 0;
  color: transparent;
  font-size: 0;

  transition-duration: 0.5s;
  transition-property: width, padding-left, color;

  ::before {
    content: "${props => { return props.text && props.text.slice(0, 1).toUpperCase() }}";

    display: grid;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: -1.25em;

    width: 2.5em;
    height: 2.5em;

    border: none;
    border-radius: 2em;

    font-size: 1rem;
    font-weight: 800;

    background-color: ${constants.color.primary.light};

    color: ${constants.color.white.normal};
  }

  :hover {
    width: max-content;
    padding-left: 2em;
    font-size: inherit;
    color: inherit;
  }

  ${props => props.css}
`

export default function Button({ as, css, text }) {
  return (
    <Fragment>
      <StyledButton as={as} css={css} text={text}>{text}</StyledButton>
    </Fragment>
  )
}