import React from "react";
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { constants } from "../styled";

const FooterSloganSection = styled.section`

  width: max-content;
  margin: 0 auto 3rem;

  > div {
    text-align: justify;

    > :nth-child(2) {
      display: inline-block;
      width: 100%;
    }
  }

  > div > span > span > em {
    font-style: normal;
    font-weight: 800;
  }

  > :first-child > span > span > em {

    ::before, ::after {
      font-size: 1.5em;
      vertical-align: middle;
      color: ${constants.color.primary.normal};
    }

    ::before {
      content: '{';
      margin-right: 0.3em;
    }

    ::after {
      content: '}';
      margin-left: 0.3em;
    }
  }

  > :first-child { font-size: 1.3rem }
  > :nth-child(2) { font-size: 1.15rem }
`

export default function FooterSlogan() {
  const { slogan } = useSelector(({ data }) => data.info);

  const getSlogan = categoryName => {
    let els = [];

    const data = slogan.filter(o => o.category === categoryName);
    if (data) for (let i = 0; i < data.length; i++) {
      const o = data[i];

      els.push(
        <span key={"text-" + i}>
          <em>{o.em}</em>{o.coda}
        </span>
      )

      if (i !== data.length - 1)
        els.push(<span key={"spacer-" + i}> </span>)
    }

    return (
      <div key={categoryName}>
        <span>{els}</span>
        <span></span>
      </div>
    )
  }

  return (
    <FooterSloganSection>
      {getSlogan("main")}
      {getSlogan("sub")}
      {getSlogan("theme")}
    </FooterSloganSection>
  )
}