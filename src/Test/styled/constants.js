import { css } from 'styled-components'

export const color = {
  primary: {
    // darker: 'hsl(42, 96%, 34%)',
    // dark: 'hsl(42, 96%, 44%)',
    normal: 'hsl(42, 96%, 54%)',
    light: 'hsl(42, 96%, 64%)',
    lighter: 'hsl(42, 96%, 74%)',
  },

  text: {
    darker: 'hsl(42, 10%, 35%)',
    normal: 'hsl(42, 10%, 45%)',
    light: 'hsl(42, 10%, 60%)',
    lighter: 'hsl(42, 20%, 80%)',
  },

  white: {
    dark: 'hsl(42, 90%, 93%)',
    normal: 'hsl(42, 90%, 96%)',
    light: 'hsl(42, 90%, 98%)',
  },

  shadow: 'hsla(42, 100%, 20%, 0.2)'
}



const animationSetting = css`
  animation-direction: normal;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`

const fade = (isFadeIn) => {
  let name = 'fade-in'
  if (!isFadeIn) name = 'fade-out'

  return css`
    animation-name: ${name};
    ${animationSetting}
  `
}

export const animation = {
  enterContent: fade(true),
  leaveContent: fade(false)
}