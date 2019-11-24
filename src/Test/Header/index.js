import React from 'react'
import { useSelector } from 'react-redux'
import HeaderIntro from './HeaderIntro'
import HeaderNormal from './HeaderNormal'

export default function Header() {
  const { ui: { content } } = useSelector(store => store)
  const isIntro = (content.name === "intro")

  switch (isIntro) {
    case true:
      return <HeaderIntro />
    case false:
      return <HeaderNormal />
    default:
      return <HeaderIntro />
  }
}