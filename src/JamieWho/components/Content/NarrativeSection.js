import React from 'react'
import styled, { css } from 'styled-components'
import { Heading, Container } from '../styled'
import { makeArray_skill } from '../func'

const cssMargin = margin => css`
  margin-top: ${margin};
  margin-bottom: ${margin};

  :first-child { margin-top: 0; }
  :last-child { margin-bottom: 0; }
`

const NarrativeSectionStyled = styled(Container.ContentSection)`
  > * > span { display: block; }

  > h1 {
    ${cssMargin('5rem')}
    font-size: 1.4rem;
    line-height: 1.3;
  }

  > p, > ul {
    ${cssMargin('2.5rem')}
    line-height: 1.6;
  }

  > ul > li {
    display: inline-block;
    margin-left: 0.8em;
    font-size: 1.8rem;

    > a::before {
      content: '#';
      margin-right: 0.2em;
    }

    > a > em {
      font-weight: 800;
      font-style: normal;
    }

    > a[href='#skills?narrative'] {
      font-size: 2.2rem;
    }
  }
`

const makeSentence = sentence => {
  if (sentence.includes('\n')) {
    let _children = sentence.split('\n')

    for (let i = 0; i < _children.length; i++)
      _children[i] = <span key={i}>{_children[i]}</span>

    return _children

  } else return sentence
}

const getStyledHeading = isTitle => {
  switch (isTitle) {
    case 'left':
      return Heading.Underline.Left
    case 'right':
      return Heading.Underline.Right
    case 'center':
      return Heading.Underline.Center
    default: return
  }
}

const NarrativeSection = ({ data, skillsData, onClick }) => {
  const children = []
  let key = 0;

  data.forEach(
    ({ sentence, isTitle, isList }) => {
      if (isList) {
        const _data = skillsData.index.filter(o => o.category === sentence)
        const listItem = makeArray_skill(sentence, _data, onClick)

        children.push(
          <ul key={key++}>
            {listItem}
          </ul>
        )

      } else if (isTitle) {
        const _sentence = makeSentence(sentence)
        const StyledHeading = getStyledHeading(isTitle)

        children.push(
          <StyledHeading key={key++}>
            {_sentence}
          </StyledHeading>
        )

      } else {
        const _sentence = makeSentence(sentence)

        children.push(
          <p key={key++}>
            {_sentence}
          </p>
        )
      }
    }
  )

  return (
    <NarrativeSectionStyled>
      {children}
    </NarrativeSectionStyled>
  )
}

export default NarrativeSection