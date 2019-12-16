import React from 'react'

import { useSelector } from 'react-redux'

import styled from 'styled-components'
import { Button } from '../styled'

const StyledUl = styled.ul`
  max-width: max-content;
  margin-right: auto;
  margin-left: auto;
`

const makeArray_Button = (data, setToContent) => {
  const array = []

  data.forEach(
    ({ name, title }) => array.push(
      <Button
        as='li'
        key={`header-intro-nav-item-${name}`}
        text={name}
        onClick={() => setToContent(name)}
      >
        <span>{title}</span>
      </Button>
    )
  )

  return array
}

export default function HeaderIntroNav({ setToContent }) {
  const data = useSelector(({ data }) => data.contents)
  const listItems = makeArray_Button(data, setToContent)

  return (
    <StyledUl>
      {listItems}
    </StyledUl>
  )
}