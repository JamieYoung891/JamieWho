import React, { Fragment } from 'react'

import { useSelector } from 'react-redux'
import { CONTENT_NAME } from '../../redux/ui/content'

import styled from 'styled-components'
import { constants } from '../styled/'

import Contacts from './Contacts'
import Footer from '../Footer'
import Resume from './Resume'
import Projects from './Projects'
import Narrative from './Narrative'
import DescriptionProject from './DescriptionProject'
import DescriptionSkill from './DescriptionSkill'


const Section = styled.section`
  ${props => props.css}
`

export default function () {
  const { name: contentName, toFadeOut } = useSelector(({ ui }) => ui.content)



  let content;
  const utilize = _content => (
    <Fragment>
      {_content}
      <DescriptionSkill />
      <DescriptionProject />
      <Footer />
    </Fragment>
  )

  switch (contentName) {
    case CONTENT_NAME.RESUME:
      content = utilize(<Resume />)
      break;
    case CONTENT_NAME.PROJECTS:
      content = utilize(<Projects />)
      break;
    case CONTENT_NAME.NARRATIVE:
      content = utilize(<Narrative />)
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