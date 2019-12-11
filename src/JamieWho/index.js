import React, { Fragment, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setContent, CONTENT_NAME } from './redux/ui/content';

import useData from './hooks/useData'
import Header from './components/Header'

import Content from './components/Content';

export default function Test() {
  const contentName = useSelector(({ ui }) => ui.content.name)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setContent(CONTENT_NAME.PROJECTS))
  }, [dispatch])

  useData();

  const { max, loaded } = useSelector(({ ui }) => ui.loader)

  if (max && max === loaded)
    if (contentName === CONTENT_NAME.INTRO)
      return <Header />

    else return (
      <Fragment>
        <Header />
        <Content />
      </Fragment>
    )

  else
    return <div style={{ "margin": "5vmin auto" }}>loading</div>
}