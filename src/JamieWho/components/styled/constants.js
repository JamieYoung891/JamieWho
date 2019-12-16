import { css } from 'styled-components'

export const responsive = {
  viewportWidth: {
    mobile: "320",
    mobileLarge: "360",
    mobileLarger: "400",
    tablet: "768",
    tabletLarge: "1024",
  },
  fontSize: {
    mobile: "12",
    mobileLarge: "14",
    mobileLarger: "16",
    tablet: "24",
    tabletLarge: "32"
  }
}

export const color = {
  primary: {
    // darker: 'hsl(42, 96%, 34%)',
    dark: 'hsl(42, 96%, 44%)',
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

export const marginCenter = css`
  width: max-content;
  margin-right: auto;
  margin-left: auto;
`