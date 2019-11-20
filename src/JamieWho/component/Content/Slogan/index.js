import React from "react";
import "./index.css";


function Slogan(props) {
  const slogan = props.data;

  const getSlogan = categoryName => {
    let els = [];

    const data = slogan.filter(o => o.category === categoryName);
    if (data) for (let i = 0; i < data.length; i++) {
      const o = data[i];
      const clName = `slogan-${categoryName} ${categoryName}-${i}`

      els.push(
        <span key={i} className={clName}>
          <em>{o.em}</em>{o.coda}
        </span>
      )
      
      if (i !== data.length - 1)
      els.push(<span key={"spacer" + i} className="slogan-spacer"> </span>)
    }

    return (
      <div key={categoryName} className={"footer-slogan-" + categoryName}>
        <span className="slogan-text">{els}</span>
        <span className="slogan-filler"></span>
      </div>
    )
  }

  return (
    <section className="footer-slogan">
      {getSlogan("main")}
      {getSlogan("sub")}
      {getSlogan("theme")}
    </section>
  )
}

export default Slogan