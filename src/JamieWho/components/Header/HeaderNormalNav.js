import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../../redux/ui/nav'

import styled, { css } from 'styled-components'
import { Container, constants } from '../styled'
import CloseButton from '../CloseButton'
import { makeArray_li } from '../func'
import { buttonCSS } from '../styled/Button'

const tabletWidth = constants.responsive.viewportWidth.tablet

const Nav = styled(Container.FullScreen)`

  @media (orientation: portrait) and (max-width: ${tabletWidth-1}px),
    (orientation: landscape) and (max-height: ${tabletWidth-1}px) {

    display: grid;
    grid-auto-flow: row;
    align-items: stretch;
    opacity: 0;

    position: fixed;
    top: -100%;
    left: 0;
    z-index: 100;

    font-weight: 800;
    font-size: 2rem;
    text-align: center;
    color: ${constants.color.white.normal};

    transition-duration: 0.5s;
    transition-property: top, opacity;

    > * {
      cursor: pointer;

    }

    > button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 101;
    }

    > li {
      display: grid;
      align-content: center;

      background-color: ${constants.color.primary.normal};
      opacity: 0.7;

      transition-duration: 0.5s;
      transition-property: opacity;

      :hover {
        opacity: 1;
      }
    }
  }

  @media (orientation: portrait) and (min-width: ${tabletWidth}px),
    (orientation: landscape) and (min-height: ${tabletWidth}px) {

    position: absolute;
    bottom: 100%;
    right: 50%;
    transform: translateX(50%);

    width: max-content;
    height: max-content;

    opacity: 0;

    transition-duration: 0.5s;
    transition-property: bottom, opacity;

    > button {
      display: none;
    }
    
    > li {
      ${buttonCSS}
      display: inline-block;
    }
  }
  ${props => props.css}
`

const navOpenCss = css`

  @media (orientation: portrait) and (max-width: ${tabletWidth-1}px),
    (orientation: landscape) and (max-height: ${tabletWidth-1}px) {

    top: 0;
    opacity: 1;
  }

  @media (orientation: portrait) and (min-width: ${tabletWidth}px),
    (orientation: landscape) and (min-height: ${tabletWidth}px) {
    bottom: 0;
    opacity: 1;
  }
`

export default function ({ setToContent }) {
  const dispatch = useDispatch()
  const onClick_close = () => dispatch(toggleNav())

  const data = useSelector(({ data }) => data.contents)
  const onClick_listItems = payload => {
    dispatch(toggleNav())
    setToContent(payload)
  }
  const listItems = makeArray_li(data, onClick_listItems)

  const toOpen = useSelector(({ ui }) => ui.nav.toOpen)
  let css = null;
  if (toOpen) css = navOpenCss


  return (
    <Nav as="ol" css={css}>
      <CloseButton onClick={onClick_close} color={constants.color.white.light} />
      {listItems}
    </Nav>
  )
}