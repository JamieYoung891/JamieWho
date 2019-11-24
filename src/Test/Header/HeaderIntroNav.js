import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { makeListItemArray } from '../func'

const StyledUl = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-evenly;
  > * {
    cursor: pointer;
    display: inline-block;
  }
`

export default function HeaderIntroNav({ setToContent }) {
  const data = useSelector(({ data }) => data.contents)
  const listItems = makeListItemArray(data, setToContent)

  return (
    <StyledUl>
      {listItems}
    </StyledUl>
  )
}