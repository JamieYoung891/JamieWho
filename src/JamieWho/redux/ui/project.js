const PROJECT_ACTION = {
  ENTER: 'jamieWho/ui/project/ENTER',
  LEAVE: 'jamieWho/ui/project/LEAVE'
}

export const enterProject = payload => ({ type: PROJECT_ACTION.ENTER, payload })
export const leaveProject = () => ({ type: PROJECT_ACTION.LEAVE })

const initialState = {
  name: 0,
  toShow: false
}

export default function project(state = initialState, { type, payload }) {
  switch (type) {

    case PROJECT_ACTION.ENTER:
      return { name: payload, toShow: true }

    case PROJECT_ACTION.LEAVE:
      return { ...state, toShow: false }

    default:
      return state
  }
}