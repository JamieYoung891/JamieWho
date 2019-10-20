import React from 'react';

import Slogan from "./Slogan"

import "../css/Footer.css";

function Footer(props) {
  const { contact, developer, slogan } = props.data.info

  const contacts = () => {
    const els = [];

    for (let i = 0; i < contact.length; i++) {
      const data = contact[i], key = "contact-" + i;
      els.push(
        <a
          key={key}
          className={key + " contact-item contact-item-" + data.name.toLowerCase()}
          href={data.address}
        ><span>{data.title}</span></a>
      )
    }

    return els
  }

  return (
    <footer className="jamie-who-footer">
      <Slogan data={slogan}></Slogan>
      <section className="footer-info">
        <div className="footer-info-wrapper">
          <div className="info-copyright">
            © 2019 <span className="copyright-owner">{developer[0].nameEn}</span>, All Rights Reserved.
        </div>
          <div className="info-developer">
            <span className="developer-name">{developer[0].nameEn}</span>
            <span className="developer-title">{developer[0].titleEn.toLowerCase()}</span>
          </div>
          <div className="info-contact">
            {contacts()}
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer;