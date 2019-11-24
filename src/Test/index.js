import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setName_content } from '../JamieWho/redux/ui/content';

import useData from '../JamieWho/hooks/useData'
import Header from './Header/'
import HeaderNormal from './Header/HeaderNormal';

const Target = () => [
  <Header key="Header" />
  // <HeaderNormal key="HeaderNormal" />
]

export default function Test() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setName_content('narrative'))
  // }, [dispatch])

  useData();

  const { max, loaded } = useSelector(({ ui }) => ui.loader)
  if (max && max === loaded)
    return <Target />
  else
    return <div style={{ "margin": "5vmin auto" }}>loading</div>

  return <Target />
}