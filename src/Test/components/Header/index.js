import React from 'react'
import { useSelector } from 'react-redux'
import { CONTENT_NAME } from '../../redux/ui/content'

import FadeAnimation, { FadeAnimationParam } from './HeaderFadeAnimation'
import HeaderIntro from './HeaderIntro'
import HeaderNormal from './HeaderNormal'

const HeaderIntroWithFade = () => FadeAnimation(new FadeAnimationParam(
  HeaderIntro,
  (toContent) => toContent !== CONTENT_NAME.INTRO
))

function HeaderNormalWithFade() {
  return FadeAnimation(new FadeAnimationParam(
    HeaderNormal,
    toContent => toContent === CONTENT_NAME.INTRO
  ))
}

export default function Header() {
  const { ui: { content } } = useSelector(store => store)
  const isIntro = (content.name === "intro")

  switch (isIntro) {
    case true:
      return <HeaderIntroWithFade />
    case false:
      return <HeaderNormalWithFade />
    default:
      return <HeaderIntro />
  }
}