import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setName_content } from '../../JamieWho/redux/ui/content'

import { constants, ContainerFullScreen, ContainerPositionCenter } from '../styled'
import HeaderIntroNav from './HeaderIntroNav'
import HeaderIntroHey from './HeaderIntroHey'


export default function HeaderIntro() {
  const dispatch = useDispatch()
  const [toContent, setToContent] = useState(false)

  let _animation = constants.animation.enterContent
  if (toContent) {
    _animation = constants.animation.leaveContent
    setTimeout(() => {
      dispatch(setName_content(toContent))
    }, 1000);
  }

  return (
    <ContainerFullScreen as="header" css={_animation}>
      <ContainerPositionCenter>
        <HeaderIntroHey />
        <HeaderIntroNav setToContent={setToContent} />
      </ContainerPositionCenter>
    </ContainerFullScreen>
  )
}