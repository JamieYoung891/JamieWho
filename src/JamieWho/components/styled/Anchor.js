import styled from 'styled-components'
import { color } from'./constants'

export const Translate = styled.a`
  display: inline-block;
  transition-duration: 0.5s;
  transition-property: transform, opacity, text-shadow;
  transform-origin: bottom;
  text-shadow: 0.05em 0.05em ${color.shadow};
  text-decoration: none;
  color: ${props => props.color || color.primary.normal};
  opacity: 0.9;

  :hover {
    transform: translateX(-0.05rem) translateY(-0.1rem);
    text-shadow: calc(0.05rem + 0.1em) calc(0.1rem + 0.1em) ${color.shadow};
    opacity: 1;
  }
`