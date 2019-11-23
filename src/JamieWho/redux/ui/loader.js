const LOADER_ACTION = {
  SET: {
    MAX:
      'jamieWho/ui/loader/START',
    LOADED:
      'jamieWho/ui/loader/SET:loaded',
  }
}

export const actionCreator_loader = {
  set: {
    max: max => ({ type: LOADER_ACTION.SET.MAX, payload: max }),
    loaded: loaded => ({ type: LOADER_ACTION.SET.LOADED, payload: loaded }),
  }
}

const initialState = {
  max: null,
  loaded: null,
}

export default function loader(state = initialState, { type, payload }) {
  switch (type) {

    case LOADER_ACTION.SET.MAX:
      return { max: payload, loaded: 0 }
    case LOADER_ACTION.SET.LOADED:
      return { ...state, loaded: payload }

    default:
      return state
  }
}