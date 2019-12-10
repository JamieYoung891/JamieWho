import React from "react"
import { useDispatch } from 'react-redux'

import styled, { css } from 'styled-components'
import { Container, constants } from "../styled"
import CloseButton from "../CloseButton"

const ProjectArticle = styled(Container.FullScreen)`
  position: fixed;
  top: -100%;
  left: 0;

  background-color: ${constants.color.primary.light};

  transition-duration: 1s;
  transition-property: top;

  > div {
    max-height: 90%;
    border-radius: 3rem;
    padding: 3rem;

    background-color: ${constants.color.white.light};
    
    overflow-y: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar { display: none; }
  }


  > div > ${CloseButton} {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    font-size: 0.5rem;
  }

  ${props => props.css}
`

const showDescription = css`
  top: 0;
`

const Description = ({ children, toShow, leaveFunction}) => {
  let _css; if (toShow) _css = showDescription
  const dispatch = useDispatch()

  return (
    <ProjectArticle as='article' css={_css}>
      <Container.PositionCenter as={Container.MaxWidth}>
        {children}
        <CloseButton onClick={() => dispatch(leaveFunction())} />
      </Container.PositionCenter>
    </ProjectArticle>
  )
}

export default Description