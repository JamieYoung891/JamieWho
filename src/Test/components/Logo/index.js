import React from 'react'
import styled from 'styled-components'
import { constants } from '../styled'


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
`

export default function Logo({ onClick }) {
  return (
    <StyledDiv onClick={onClick}>
      <span>j</span>
    </StyledDiv>
  )
}