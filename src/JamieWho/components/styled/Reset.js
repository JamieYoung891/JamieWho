import { createGlobalStyle } from 'styled-components'
import { color } from './constants'
export default createGlobalStyle`

  @import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');

  html, body {
    margin: 0;
    
    font-family: 'NanumSquareRound', sans-serif;
    font-size: 12px;
    color: ${color.text.normal};
    line-height: 1;
  }

  #root {
    height: 100vh;
    width: 100vw;

    overflow-x: hidden;
    overflow-y: auto;

    scroll-behavior: smooth;
  }

  * {
    position: relative;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
  }
  
  ul, ol, li { list-style: none }
  
  @keyframes fade-in {
    0% { opacity: 0 }
    100% { opacity: 1}
  }
  
  @keyframes fade-out {
    0% { opacity: 1 }
    99% { opacity: 0 }
    100% { display: none }
  }
`