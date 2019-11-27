import React from 'react'

import { ContainerFullScreen, ContainerPositionCenter } from '../styled'
import HeaderIntroNav from './HeaderIntroNav'
import HeaderIntroHey from './HeaderIntroHey'

export default function HeaderIntro({ setToContent, animation }) {
  return (
    <ContainerFullScreen as="header" css={animation}>
      <ContainerPositionCenter>
        <HeaderIntroHey />
        <HeaderIntroNav setToContent={setToContent} />
      </ContainerPositionCenter>
    </ContainerFullScreen>
  )
}