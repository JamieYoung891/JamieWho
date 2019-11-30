import React, { Fragment } from 'react'

import { useSelector } from 'react-redux'
import { CONTENT_NAME } from '../../redux/ui/content'

import styled from 'styled-components'
import { constants } from '../styled/'

import Contacts from './Contacts'
import Footer from '../Footer'



const Section = styled.section`
  ${props => props.css}
`

export default function () {
  const { name: contentName, toFadeOut } = useSelector(({ ui }) => ui.content)



  let content;
  const withFooter = _content => (
    <Fragment>
      {_content}
      <Footer />
    </Fragment>
  )

  switch (contentName) {
    case CONTENT_NAME.RESUME:
      content = withFooter(<div>this is resume</div>)
      break;
    case CONTENT_NAME.PROJECTS:
      content = withFooter(<div>this is projects</div>)
      break;
    case CONTENT_NAME.NARRATIVE:
      content = withFooter(<div>this is narrative</div>)
      break;
    case CONTENT_NAME.CONTACTS:
      content = <Contacts />
      break;
    default:
  }



  let animation
  if (!toFadeOut) animation = constants.animation.enterContent
  else animation = constants.animation.leaveContent


  return (
    <Section css={animation}>
      {content}
    </Section>
  )
}