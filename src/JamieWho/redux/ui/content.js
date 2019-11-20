const CONTENT_ACTION = {
  SET_NAME: "jamieWho/ui/content/SET:name",
  RESET_NAME: "jamieWho/ui/content/RESET:name"
}

export const CONTENT_NAME = {
  INITIAL: "INITIAL",
  RESUME: "RESUME",
  PROJECTS: "PROJECTS",
  NARRATIVE: "NARRATIVE",
  CONTACTS: "CONTACTS"
}

export const setName_content = payload => ({ type: CONTENT_ACTION.SET_NAME, payload })
export const resetName_content = () => ({ type: CONTENT_ACTION.RESET_NAME })

const defaultState = { name: CONTENT_NAME.INITIAL }

export default function content(state = defaultState, { type, payload }) {
  switch (type) {

    case CONTENT_ACTION.SET_NAME:
      return { name: payload }

    case CONTENT_ACTION.RESET_NAME:
      return { ...defaultState }

    default:
      return state
  }
}