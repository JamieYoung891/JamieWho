import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setToIndicate, setMax, setValue } from '../../redux/ui/progressIndicator';
import styled, { css } from 'styled-components'
import { constants } from '../styled';

const IndicatorContainer = styled.div`

width: 100%;

height: 0.5rem;
margin: 0 auto;

transition-duration: 1s;
transition-property: opacity;

background-color: ${constants.color.primary.lighter};


> div {
  width: ${
  props =>
    props.max && props.value
      ? Math.floor(props.value / props.max * 100)
      : 0
  }%;
  height: 100%;

  background-color: ${constants.color.primary.normal};
}

${props => props.css}
`

const removeIndicator = css`opacity:0;`

export default function ProgressIndicator() {
  const { toIndicate, max, value } = useSelector(({ ui }) => ui.progressIndicator)

  const dispatch = useDispatch();
  const root = document.getElementById("root")



  const contentName = useSelector(({ ui }) => ui.content.name)
  let _css = useRef()

  useEffect(() => {
    const getMax = () => (root.scrollHeight - root.offsetHeight)

    if (!getMax()) {
      
      _css.current = removeIndicator;
      if (toIndicate) dispatch(setToIndicate(false))

    } else if (!toIndicate) dispatch(setToIndicate(true))

    if (max !== getMax()) dispatch(setMax(getMax()))

  }, [contentName, root.scrollHeight, root.offsetHeight, toIndicate, dispatch, max])



  const getValue = () => Math.floor(root.scrollTop)
  const setValue_onScroll = () => dispatch(setValue(getValue()))

  useEffect(() => {
    root.addEventListener("scroll", setValue_onScroll)
    return () => root.removeEventListener("scroll", setValue_onScroll)
  })


  
  return (
    <IndicatorContainer max={max} value={value} css={_css}>
      <div></div>
    </IndicatorContainer>
  )
}