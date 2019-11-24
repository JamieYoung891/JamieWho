import styled from 'styled-components'

export default styled.div`
  position: absolute;
  right: 50%;
  bottom: 50%;
  width: max-content;
  transform: translate(50%, 50%);

  ${props => props.css}
`