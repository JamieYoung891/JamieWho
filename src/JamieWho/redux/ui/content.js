const CONTENT_ACTION = {
  SET_NAME: "jamieWho/ui/content/SET:name",
  RESET_NAME: "jamieWho/ui/content/RESET:name"
}

export const CONTENT_NAME = {
  INTRO: "intro",
  RESUME: "resume",
  PROJECTS: "portfolio",
  NARRATIVE: "narrative",
  CONTACTS: "contacts"
}

export const setName_content = payload => ({ type: CONTENT_ACTION.SET_NAME, payload })
export const resetName_content = () => ({ type: CONTENT_ACTION.RESET_NAME })

const initialState = { name: CONTENT_NAME.PROJECTS }

export default function content(state = initialState, { type, payload }) {
  switch (type) {

    case CONTENT_ACTION.SET_NAME:
      return { name: payload }

    case CONTENT_ACTION.RESET_NAME:
      return { ...initialState }

    default:
      return state
  }
}