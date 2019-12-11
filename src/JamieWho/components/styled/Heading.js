import styled, { css } from 'styled-components'
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

const underlineCss = css`
  width: max-content;
  border-bottom: 0.3em solid ${color.primary.normal};
`

export const Underline = {
  Center: styled.h1`
    margin: 0 auto;
    padding: 0 1.5em;
    border: 0.3em solid transparent;
    border-radius: 1.5em;
    text-align:center;

    ${underlineCss}
  `,
  Left: styled.h1`
    padding-right: 1.5em;
    border-right: 0.3em solid transparent;
    border-bottom-right-radius: 1.5em;

    ${underlineCss}
  `,
  Right: styled.h1`
    margin-right: 0;
    margin-left: auto;
    padding-left: 1.5em;
    border-left: 0.3em solid transparent;
    border-bottom-left-radius: 1.5em;
    text-align: right;

    ${underlineCss}
  `
}

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

export const ContentSectionItem1 = styled.h3`
  display: inline-block;
  width: max-content;
  font-size: 1.3rem;
  font-weight: 800;
  color: ${color.text.light};
`

export const ContentSectionItem2 = styled.h4`
  display: inline-block;
  width: max-content;
  font-size: 1rem;
  font-weight: 800;
  color: ${color.text.light};
`