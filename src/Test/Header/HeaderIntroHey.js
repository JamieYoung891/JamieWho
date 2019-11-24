import React from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { constants, HeadingCurlyBraces } from '../styled'

const StyledDiv = styled.div`
  margin-bottom: 2rem;

  > :first-child {
    color: ${constants.color.text.light};
    margin-bottom: 0.5rem;
  }

  > *:nth-child(2) {
    font-weight: 600;
    color: ${constants.color.text.lighter};
  }
`

export default function HeaderIntroHey() {
  const { title, description } = useSelector(({ data }) => data.info.website[0])

  return (
    <StyledDiv>
      <HeadingCurlyBraces>{title}</HeadingCurlyBraces>
      <p>{description}</p>
    </StyledDiv>
  )
}