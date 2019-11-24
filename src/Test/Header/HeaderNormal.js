import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Logo from '../Logo'
import { setName_content } from '../../JamieWho/redux/ui/content'

const StyledDiv = styled.div`
  padding: 0.5rem;

  > * {
    cursor: pointer;
  }
`

export default function HeaderNormal() {
  const dispatch = useDispatch()
  const onClick = () => dispatch(setName_content('intro'))

  return (
    <StyledDiv>
      <Logo onClick={onClick} />
    </StyledDiv>
  )
}