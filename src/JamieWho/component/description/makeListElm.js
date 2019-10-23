import React from "react"

export const makeListElm = (listName, dataArray) => {

  const organizeData = (dataArray) => {
    const organizedData = [];

    for (let i = 0; i < dataArray.length; i++) {

      const item = dataArray[i];
      const itemDate = Date.parse(item.date)

      if (i > 0) for (let j = 0; j < i; j++) {

        if (Date.parse(organizedData[j].date) < itemDate) {
          organizedData.splice(j, 0, item);
          break;

        } else if (i - 1 === j) {
          organizedData.push(item)

        } else continue;


      } else { organizedData.push(item) }
    }

    return organizedData
  }

  const makeItemElms = (dataArray) => {
    const elms = [];

    for (let i = 0; i < dataArray.length; i++) {
      const item = dataArray[i];
      elms.push(
        <li key={i} className="list-item">
          <span className="date">{item.date}</span>
          <span className="title">{item.title}</span>
          <span className="institution">{item.institution}</span>
        </li>
      )
    }

    return elms
  };

  const dataOrganized = organizeData(dataArray);
  const listItemElms = makeItemElms(dataOrganized);

  if (listItemElms.length === 0) return
  return (
    <div className={`description-div ${listName.toLowerCase()}`}>
      <h3 className="title">{listName}</h3>
      <ul className="list">
        {listItemElms}
      </ul>
    </div>
  )
}