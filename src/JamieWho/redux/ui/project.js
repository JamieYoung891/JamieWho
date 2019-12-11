const PROJECT_ACTION = {
  SET_NAME: 'jamieWho/ui/project/SET:name',
  TOGGLE_TOSHOW: 'jamieWho/ui/project/SET:toShow',
  ENTER: 'jamieWho/ui/project/ENTER',
  LEAVE: 'jamieWho/ui/project/LEAVE'
}

export const setName_project = payload => ({ type: PROJECT_ACTION.SET_NAME, payload })
export const toggleToShow_project = () => ({ type: PROJECT_ACTION.TOGGLE_TOSHOW })
export const enterProject = payload => ({ type: PROJECT_ACTION.ENTER, payload })
export const leaveProject = () => ({ type: PROJECT_ACTION.LEAVE })

const initialState = {
  name: null,
  toShow: false
}

export default function project(state = initialState, { type, payload }) {
  switch (type) {

    case PROJECT_ACTION.SET_NAME:
      return { ...state, name: payload }

    case PROJECT_ACTION.TOGGLE_TOSHOW:
      return { ...state, toShow: !state.toShow }

    case PROJECT_ACTION.ENTER:
      return { name: payload, toShow: true }

    case PROJECT_ACTION.LEAVE:
      return { ...state, toShow: false }

    default:
      return state
  }
}