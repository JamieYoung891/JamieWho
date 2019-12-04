import React from 'react'
import styled from 'styled-components'
import { constants } from './styled'


const StyledDiv = styled.div`
  display: grid;

  width: 3rem;
  height: 3rem;

  border-radius: 0 0 1rem 0;
  
  font-size: 2rem;
  font-weight: 800;
  
  background-color: ${constants.color.primary.normal};
  color: ${constants.color.white.dark};
  
  align-items: center;
  transition-duration: 0.5s;
  transition-property: color, background-color;

  :hover {
    background-color: ${constants.color.primary.light};
    color: ${constants.color.white.light};
  }

  span {
    margin: auto;
  }

  ${props => props.css}
`

export default function Logo({ onClick, css }) {
  return (
    <StyledDiv onClick={onClick} css={css}>
      <span>j</span>
    </StyledDiv>
  )
}