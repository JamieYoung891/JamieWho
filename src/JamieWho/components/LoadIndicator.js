import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { actionCreator_loader } from '../redux/ui/loader'

import styled from 'styled-components'
import { Container, constants } from './styled'

const LoaderIndicatorStyled = styled(Container.FullScreen)`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;

  > div > progress {
    width: 70vmin;
    height: 7vmin;
    overflow: hidden;

    -webkit-appearance: none;
    appearance: none;

    &,
    &[value]::-webkit-progress-bar,
    &[value]::-webkit-progress-value { border-radius: 3.5vmin; }

    &[value]::-webkit-progress-bar { background-color: ${constants.color.white.dark}; }
    &[value]::-webkit-progress-value {
      background-color: ${constants.color.primary.normal};
      transition: 100ms ease;
    }
  }

  ${props => props.css}
`

const getPercent = (max, loaded) => {
  let number = Math.floor((loaded / max) * 100);
  return number ? number : 0
}

export default function LoadIndicator() {
  const { toShow, max, loaded } = useSelector(({ ui }) => ui.loader)
  const dispatch = useDispatch()

  useEffect(() => {
    if (max && max === loaded) dispatch(actionCreator_loader.end())
  },[dispatch, loaded, max])

  let css = null
  if (toShow) css = constants.animation.enterContent
  else css = constants.animation.leaveContent

  return (
    <LoaderIndicatorStyled as='section' css={css}>
      <Container.PositionCenter>
        <progress max={max} value={loaded}></progress>
        <Container.PositionCenter>
          {`${getPercent(max, loaded)}%`}
        </Container.PositionCenter>
      </Container.PositionCenter>
    </LoaderIndicatorStyled>
  )
}