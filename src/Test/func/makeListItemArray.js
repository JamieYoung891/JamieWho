import React from 'react'

export const makeListItemArray = (dataArray, _callback) => {
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