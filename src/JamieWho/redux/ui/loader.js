const LOADER_ACTION = {
  START: 'jamieWho/ui/loader/START',
  SET_LOADED: 'jamieWho/ui/loader/SET:loaded',
  END: 'jamieWho/ui/loader/END',
}

export const actionCreator_loader = {
  start: max => ({ type: LOADER_ACTION.START, payload: max }),
  setLoaded: loaded => ({ type: LOADER_ACTION.SET_LOADED, payload: loaded }),
  end: () => ({ type: LOADER_ACTION.END })
}

const initialState = {
  toShow: false,
  max: null,
  loaded: null,
}

export default function loader(state = initialState, { type, payload }) {
  switch (type) {

    case LOADER_ACTION.START:
      return { toShow: true, max: payload, loaded: 0 }
    case LOADER_ACTION.SET_LOADED:
      return { ...state, loaded: payload }
    case LOADER_ACTION.END:
      return { ...state, toShow: false }

    default:
      return state
  }
}