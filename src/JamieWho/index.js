import React, { Fragment, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setContent, CONTENT_NAME } from './redux/ui/content';

import useData from './hooks/useData'
import Header from './components/Header'

import Content from './components/Content';
import LoadIndicator from './components/LoadIndicator';

const JamieWho = () => {
  const contentName = useSelector(({ ui }) => ui.content.name)

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setContent(CONTENT_NAME.NARRATIVE))
  // }, [dispatch])

  useData();

  const { max, loaded } = useSelector(({ ui }) => ui.loader)

  const header = <Header key='Header' />
  const content = <Content key='Content' />

  let children = []

  if (max && max === loaded)
    if (contentName === CONTENT_NAME.INTRO) children = [header]
    else children = [header, content]

  return (
    <Fragment>
      <LoadIndicator />
      {children}
    </Fragment>
  )
}

export default JamieWho