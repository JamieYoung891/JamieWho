import styled from 'styled-components'

export const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;

  ${props => props.css}
`

export const PositionCenter = styled.div`
  position: absolute;
  right: 50%;
  bottom: 50%;
  width: max-content;
  transform: translate(50%, 50%);

  ${props => props.css}
`

export const MaxWidth = styled.div`
  width: 90%;
  max-width: 133vmin;
  margin: 0 auto;

  ${props => props.css}
`

export const ContentSection = styled.section`
  padding: 3rem 0;
  :first-of-type { padding-top: 6rem }
  :last-of-type { padding-bottom: 6rem }

  ${props => props.css}
`

export const ContentSectionDiv = styled.div`
  margin-bottom: ${props => props.margin || '3rem'};
  :last-of-type { margin-bottom: 0; }

  ${props => props.css}
`