const NAV_ACTION = {
  TOGGLE_TO_OPEN: 'jamieWho/ui/nav/TOGGLE:toOpen'
}

export const toggleNav = () => ({ type: NAV_ACTION.TOGGLE_TO_OPEN })

const initialState = {
  toOpen: false
}

export default function nav(state = initialState, { type }) {
  switch (type) {
    case NAV_ACTION.TOGGLE_TO_OPEN:
      return { toOpen: !state.toOpen }

    default:
      return state
  }
}