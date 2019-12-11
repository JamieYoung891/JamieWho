import React from 'react'
import { Anchor } from './styled';

export const makeArray_li = (dataArray, _callback) => {
  const resultArray = []
  let callback = () => { };
  if (_callback) callback = name => _callback(name)

  dataArray.forEach(
    ({ name, title }) => resultArray.push(

      <li
        key={name}
        onClick={() => callback(name)}
      >
        {title}
      </li>
    )
  )

  return resultArray
}

let switch_skill = true

export const makeArray_skill = (categoryName, data, onClick) => {

  const getChild = (name, title, em) => (
    <li key={`skills-list-item-${categoryName}-${name}`}>
      <Anchor.Translate
        href={`#skills?${name}`}
        onClick={() => onClick(name)}
      >
        {em ? <em>{title}</em> : title}
      </Anchor.Translate>
    </li>
  )

  const categoryChildren = [];

  if (categoryName === 'other') {
    if (switch_skill) {
      for (let i = 0; i + 1 < data.length; i++) {
        const { name, title, em } = data[i];
        categoryChildren.push(
          getChild(name, title, em)
        )
      }

      switch_skill = !switch_skill

    } else {
      const { name, title, em } = data[data.length - 1];
      categoryChildren.push(
        getChild(name, title, em)
      )

      switch_skill = !switch_skill
    }

  } else {
    data.forEach(({ name, title, em }) => {
      categoryChildren.push(
        getChild(name, title, em)
      )
    })
  }

  return categoryChildren
}