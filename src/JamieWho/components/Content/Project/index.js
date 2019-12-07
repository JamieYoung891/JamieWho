import React from "react"

import { useSelector, useDispatch } from 'react-redux'
import { leaveProject } from '../../../redux/ui/project'

import styled, { css } from 'styled-components'
import { Heading, Container, constants } from "../../styled"
import CloseButton from "../../CloseButton"

const ProjectArticle = styled(Container.FullScreen)`
  position: fixed;
  top: -100%;
  left: 0;

  background-color: ${constants.color.primary.light};

  transition-duration: 1s;
  transition-property: top;

  > div {
    max-height: 90%;
    border-radius: 3rem;
    padding: 3rem;

    background-color: ${constants.color.white.light};
    
    overflow-y: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar { display: none; }
  }


  > div > ${CloseButton} {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    font-size: 0.5rem;
  }

  > div > :first-child > ${Heading.ContentSectionSub} { margin-left: 1rem; }

  > div > div > ul {
    margin-top: 1rem;
    margin-left: 1rem;

    line-height: 1.3;

    > li {
      margin-bottom: 0.5rem;

      :last-of-type { margin-bottom: 0; }

      ::before {
        content: '-';
        margin-right: 0.5rem;
      }
    }
  }

  ${props => props.css}
`

const showProject = css`
  top: 0;
`

const Project = () => {
  const { name, toShow } = useSelector(({ ui }) => ui.project)
  const { portfolio: { info: database } } = useSelector(({ data }) => data)
  const dispatch = useDispatch()

  // let _css; if (true) _css = showProject
  let _css; if (toShow) _css = showProject

  if (!name) return (
    <ProjectArticle as='article' css={_css}>
      <Container.PositionCenter>
        <Heading.ContentSection>
          There's no data...
        </Heading.ContentSection>
      </Container.PositionCenter>
    </ProjectArticle>
  )

  // const itemData = database.filter(o => o.name === 'jamieWho')[0]
  const itemData = database.filter(o => o.name === name)[0]

  const arrayMaker = _data => {
    const array = _data.split('\n')

    for (let i = 0; i < array.length; i++)
      array[i] = <li key={i}>{array[i]}</li>

    return array
  }

  return (
    <ProjectArticle as='article' css={_css}>
      <Container.PositionCenter as={Container.MaxWidth}>
        <Container.ContentSectionDiv>
          <Heading.ContentSection>{itemData.title}</Heading.ContentSection>
          <Heading.ContentSectionSub>{itemData.desc}</Heading.ContentSectionSub>
        </Container.ContentSectionDiv>
        <Container.ContentSectionDiv margin='2rem'>
          <Heading.ContentSectionItem1>Circumstances</Heading.ContentSectionItem1>
          <ul>{arrayMaker(itemData.circumstances)}</ul>
        </Container.ContentSectionDiv>
        <Container.ContentSectionDiv>
          <Heading.ContentSectionItem1>Solutions</Heading.ContentSectionItem1>
          <ul>{arrayMaker(itemData.solutions)}</ul>
        </Container.ContentSectionDiv>
        <CloseButton onClick={() => dispatch(leaveProject())} />
      </Container.PositionCenter>
    </ProjectArticle>
  )


  // const info = data.info[itemNum],
  //   arrayMaker = (target, name) => {
  //     let elmArray = (target.split("\n"))

  //     for (let i = 0; i < elmArray.length; i++)
  //       elmArray[i] = (
  //         <li
  //           key={`${name}-${i}`}
  //           className={`list-item`}
  //         >{elmArray[i]}</li>
  //       )

  //     return elmArray
  //   };

  // const circumstances = arrayMaker(info.circumstances, "circumstances"),
  //   solutions = arrayMaker(info.solutions, "solutions");

  // return (
  //   <section className="jamie-who-portfolio-item show-right hidden-right">
  //     <div className="jamie-who-portfolio-item-title">
  //       <div className="name">{info.title}</div>
  //       <div className="desc">{info.desc}</div>
  //       {
  //         info.url !== "" &&
  //         <div><a href={`/${info.url}`} target="_blank" rel="noopener noreferrer"><span className="outer-link"></span></a></div>
  //       }
  //     </div>
  //     <div className="jamie-who-portfolio-item-desc">
  //       <div className="circumstances">
  //         <div className="title">circumstances</div>
  //         <ul className="list">
  //           {circumstances}
  //         </ul>
  //       </div>
  //       <div className="solutions">
  //         <div className="title">solutions</div>
  //         <ul className="list">
  //           {solutions}
  //         </ul>
  //       </div>
  //       <div className="narrative"></div>
  //     </div>
  //     <div className="jamie-who-portfolio-item-nav">
  //       {itemNum > 0 ?
  //         <div
  //           className="before button"
  //           onClick={() => dispatch(enterProject(itemNum - 1))}
  //         ></div> : null
  //       }
  //       {itemNum < data.info.length - 1 ?
  //         <div
  //           className="after button"
  //           onClick={() => dispatch(enterProject(itemNum - 1))}
  //         ></div> : null
  //       }
  //     </div>
  //     <div
  //       className="close-button"
  //     ></div>
  //   </section>
  // )
}

export default Project