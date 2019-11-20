const NAV_ACTION = {
  TOGGLE_SHOW: 'jamieWho/ui/nav/TOGGLE_SHOW',
  TOGGLE_OPEN: 'jamieWho/ui/nav/TOGGLE_OPEN'
}

export const toggleShow_nav = () => ({ type: NAV_ACTION.TOGGLE_SHOW })
export const toggleOpen_nav = () => ({ type: NAV_ACTION.TOGGLE_OPEN })

const defaultState = {
  show: false,
  open: false
}

export default function nav(state = defaultState, { type }) {
  switch (type) {

    case NAV_ACTION.TOGGLE_SHOW:
      return { ...state, show: !state.show }

    case NAV_ACTION.TOGGLE_OPEN:
      return { ...state, open: !state.open }

    default:
      return state
  }
}