const CONTENT_ACTION = {
  SET_NAME: "jamieWho/ui/content/SET:name",
  TOGGLE_TO_FADE_OUT: "jamieWho/ui/content/TOGGLE:toFadeOut"
}

export const CONTENT_NAME = {
  INTRO: "intro",
  RESUME: "resume",
  PROJECTS: "portfolio",
  NARRATIVE: "narrative",
  CONTACTS: "contacts"
}

export const setContent = payload => ({ type: CONTENT_ACTION.SET_NAME, payload })
export const toggleToFadeOut = () => ({ type: CONTENT_ACTION.TOGGLE_TO_FADE_OUT })

const initialState = {
  toFadeOut: false,
  name: CONTENT_NAME.INTRO
}

export default function content(state = initialState, { type, payload }) {
  switch (type) {

    case CONTENT_ACTION.SET_NAME:
      return { name: payload, toFadeOut: false }
    case CONTENT_ACTION.TOGGLE_TO_FADE_OUT:
      return { ...state, toFadeOut: !state.toFadeOut }

    default:
      return state
  }
}