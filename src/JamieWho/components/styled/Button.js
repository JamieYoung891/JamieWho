import styled, { css } from 'styled-components'
import * as constants from './constants'

const { color: { primary, white } } = constants

export const buttonCSS_activated = css`
  ::before { background-color: ${primary.normal}; }
`

export const buttonCss_hovered = css`
  max-width: 10em;
  margin-right: 1em;
  color: ${primary.normal};

  ::before {
    margin-right: 0.5em;
    background-color: ${primary.normal};
  }
`

export const Button = styled.button`
  cursor: pointer;

  display: inline-block;
  overflow: hidden;

  max-width: 2em;
  height: 2em;

  margin-right: 0.5em;

  font-weight: 800;
  line-height: 2em;
  color: transparent;

  transition-duration: 0.5s;
  transition-property: max-width, margin-right, color;

  ::before {
    content: "${props => props.text && props.text.slice(0, 1)}";

    display: inline-block;

    width: 2em;
    height: 2em;

    margin-right: 0;

    border: none;
    border-radius: 1em;

    text-align: center;
    color: ${white.normal};

    background-color: ${primary.lighter};

    transition-duration: 0.5s;
    transition-property: margin-right, background-color;
  }

  :hover {
    ${buttonCss_hovered}
  }

  ${props => props.css}
`