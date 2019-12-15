import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../../redux/ui/nav'
import styled from 'styled-components'
import ProgressIndicator from './HeaderNormalProgressIndicator'
import Logo from '../Logo'
import Nav from './HeaderNormalNav'

const HeaderOuter = styled.header`
  position: fixed;
  top: -0.5rem;
  z-index: 100;
  
  width: 100%;

  transition-duration: 0.5s;
  transition-property: top;
  pointer-events: none;
  
  > div {
    width: 100%;
    max-width: 167vmin;
    margin: 0 auto;

    > * { pointer-events: initial; }
    > :nth-child(2) { margin: 0.5rem; }
  }

  ${props => props.css}
  ${props => props.toIndicate && "top: 0;"}
`

export default function HeaderNormal({ setToContent, animation }) {
  const { toIndicate } = useSelector(({ ui }) => ui.progressIndicator)
  const dispatch = useDispatch()
  const onClick = () => dispatch(toggleNav())

  return (
    <HeaderOuter css={animation} toIndicate={toIndicate}>
      <div>
        <ProgressIndicator />
        <Logo onClick={onClick} css="cursor: pointer;" />
        <Nav setToContent={setToContent} />
      </div>
    </HeaderOuter>
  )
}