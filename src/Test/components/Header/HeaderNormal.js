import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleOpen_nav } from '../../redux/ui/nav'
import styled from 'styled-components'
import Logo from '../Logo'

const StyledDiv = styled.div`
  padding: 0.5rem;

  > * { cursor: pointer; }

  ${props => props.css}
`

export default function HeaderNormal({ setToContent, animation }) {
  const dispatch = useDispatch()
  const onClick = () => dispatch(toggleOpen_nav())

  return (
    <StyledDiv css={animation}>
      <Logo onClick={onClick} />
    </StyledDiv>
  )
}