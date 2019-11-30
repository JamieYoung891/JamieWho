import React from 'react'

import { Container } from '../styled'
import HeaderIntroNav from './HeaderIntroNav'
import HeaderIntroHey from './HeaderIntroHey'

export default function HeaderIntro({ setToContent, animation }) {
  return (
    <Container.FullScreen as="header" css={animation}>
      <Container.PositionCenter>
        <HeaderIntroHey />
        <HeaderIntroNav setToContent={setToContent} />
      </Container.PositionCenter>
    </Container.FullScreen>
  )
}