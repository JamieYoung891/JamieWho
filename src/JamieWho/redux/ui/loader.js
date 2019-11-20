const LOADER_ACTION = {
  SET_MAX:
    'jamieWho/ui/loader/SET:max',
  SET_LOADED:
    'jamieWho/ui/loader/SET:loaded',
  TOGGLE_IS_FINISHED:
    'jamieWho/ui/loader/TOGGLE:isFinished',
  START:
    'jamieWho/ui/loader/START',
  END:
    'jamieWho/ui/loader/END',
}

export const set_Max_loader = payload => ({ type: LOADER_ACTION.SET_MAX, payload })
export const set_Loaded_loader = payload => ({ type: LOADER_ACTION.SET_LOADED, payload })
export const toggle_IsFinished_loader = () => ({ type: LOADER_ACTION.TOGGLE_IS_FINISHED })
export const start_loader = () => ({ type: LOADER_ACTION.START })
export const end_loader = () => ({ type: LOADER_ACTION.END })

const defaultState = {
  max: undefined,
  loaded: undefined,
  show: false,
  isFinished: false
}

export default function loader(state = defaultState, { type, payload }) {
  switch (type) {

    case LOADER_ACTION.START:
      return { ...defaultState, show: true }

    case LOADER_ACTION.END:
      return { ...defaultState, show: false }

    case LOADER_ACTION.SET_MAX:
      return { ...state, max: payload }

    case LOADER_ACTION.SET_LOADED:
      return { ...state, loaded: payload }

    case LOADER_ACTION.TOGGLE_IS_FINISHED:
      return { ...state, isFinished: !state.isFinished }

    default:
      return state
  }
}