import styled from 'styled-components'
import { color } from './constants'

export const CurlyBraces = styled.h1`
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

export const UnderlineCenter = styled.h1`
  width: max-content;
  margin: 0 auto;
  padding: 0 1em;
  border: 0.2em solid transparent;
  color: ${color.primary.normal};
  border-radius: 1em;
`

export const ContentSection = styled.h1`
  display: inline-block;
  width: max-content;
  font-size: 1.8rem;
  font-weight: 800;
  color: ${color.text.light};
`
export const ContentSectionSub = styled.h2`
  display: inline-block;
  width: max-content;
  font-size: 1.4rem;
  font-weight: 200;
  color: ${color.text.light};
`