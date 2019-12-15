import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { constants } from '../styled'
import { setContent, toggleToFadeOut } from '../../redux/ui/content'

export class FadeAnimationParam {
  constructor(Component, toAnimateLeave, callback = setContent) {
    this.Component = Component
    this.toAnimateLeave = toAnimateLeave
    this.callback = callback
  }
}

export default function FadeAnimation({ Component, toAnimateLeave, callback }) {
  const contentName = useSelector(({ ui }) => ui.content.name)
  const [toContent, setToContent] = useState(contentName)
  const dispatch = useDispatch()

  const _toAnimateLeave = toAnimateLeave(toContent)

  let animation = constants.animation.enterContent
  if (_toAnimateLeave) animation = constants.animation.leaveContent

  useEffect(() => {
    if (contentName !== toContent) {
      dispatch(toggleToFadeOut())
      setTimeout(() => {
        dispatch(callback(toContent))
      }, 1000);
    }
  }, [contentName, toContent, dispatch, callback])

  return (
    <Component setToContent={setToContent} animation={animation} />
  )
}