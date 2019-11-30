import React from "react";
import { useSelector } from 'react-redux'
import { Container } from '../styled'
import "./Contacts.css"

export default function Contacts() {
  const { contact } = useSelector(({ data }) => data.info)

  const getContactsElm = () => {
    const childElms = []

    for (let i = 0; i < contact.length; i++) {
      const item = contact[i], _key = `contacts-info-list-item-${i}`;
      childElms.push(
        <li key={_key} className={`contacts-info-list-item ${_key}`}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={item.prefix + item.address}
          ><span className="item-info">{item.address}</span></a>
        </li>
      )
    }

    return (
      <ul className="contacts-info-list">
        <div className="title">
          <span className="title-text">contacts</span>
        </div>
        {childElms}
      </ul>
    )
  }

  return (
    <Container.FullScreen as="article">
      <Container.PositionCenter as={Container.MaxWidth}>
        <section>
          <div className="contacts-info-section-wrapper">
            <div className="title">
              <span className="title-text">시간을 내어 주셔서<em>감사합니다!</em></span>
            </div>
          </div>
        </section>
        <section>
          <div className="contacts-info-section-wrapper">
            {getContactsElm()}
          </div>
        </section>
      </Container.PositionCenter>
    </Container.FullScreen>
  )
}