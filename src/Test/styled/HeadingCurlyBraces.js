import styled from 'styled-components'
import { color } from './constants'

export default styled.h1`
  width: max-content;
  margin: 0 auto;
  font-weight: 800;

  ::before, ::after {
    margin: 0 0.2em;
    font-size: 1.2em;
    color: ${color.primary.normal};
    vertical-align: middle;
  }

  ::before { content: "{" }
  ::after { content: "}" }

  ${props => props.css}
`