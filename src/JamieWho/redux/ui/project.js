const PROJECT_ACTION = {
  SET_NUM: 'jamieWho/ui/project/SET_NUM',
  RESET_NUM: 'jamieWho/ui/project/RESET_NUM',
  TOGGLE_OPEN: 'jamieWho/ui/project/TOGGLE_OPEN'
}

export const setNum_project = payload => ({ type: PROJECT_ACTION.SET_NUM, payload })
export const resetNum_project = () => ({ type: PROJECT_ACTION.RESET_NUM })
export const toggleOpen_project = () => ({ type: PROJECT_ACTION.TOGGLE_OPEN })

const defaultState = {
  num: undefined,
  open: false
}

export default function project(state = defaultState, { type, payload }) {
  switch (type) {
    
    case PROJECT_ACTION.SET_NUM:
      return { ...state, num: payload }

    case PROJECT_ACTION.RESET_NUM:
      return { ...state, num: undefined }

    case PROJECT_ACTION.TOGGLE_OPEN:
      return { ...state, open: !state.open }

    default:
      return state
  }
}