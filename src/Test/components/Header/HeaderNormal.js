import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleNav } from '../../redux/ui/nav'
import styled from 'styled-components'
import Logo from '../Logo'
import Nav from '../Nav'

const StyledDiv = styled.div`
  position: fixed;
  z-index: 100;

  padding: 0.5rem;

  ${props => props.css}
`

export default function HeaderNormal({ setToContent, animation }) {
  const dispatch = useDispatch()
  const onClick = () => dispatch(toggleNav())

  return (
    <StyledDiv css={animation}>
      <Logo onClick={onClick} css="cursor: pointer;" />
      <Nav setToContent={setToContent} />
    </StyledDiv>
  )
}