const INDICATOR_ACTION = {
  SET: {
    MAX: "jamieWho/ui/indicator/SET:max",
    VALUE: "jamieWho/ui/indicator/SET:value",
    TO_INDICATE: "jamieWho/ui/indicator/SET:toIndicate",
  }
}

export const setMax = payload => ({ type: INDICATOR_ACTION.SET.MAX, payload })
export const setValue = payload => ({ type: INDICATOR_ACTION.SET.VALUE, payload })
export const setToIndicate = payload => ({ type: INDICATOR_ACTION.SET.TO_INDICATE, payload })

const initialState = {
  toIndicate: false,
  max: null,
  value: null
}

export default function indicator(state = initialState, { type, payload }) {
  switch (type) {
    case INDICATOR_ACTION.SET.MAX:
      return { ...state, max: payload }
    case INDICATOR_ACTION.SET.VALUE:
      return { ...state, value: payload }
    case INDICATOR_ACTION.SET.TO_INDICATE:
      return { ...state, toIndicate: payload }
    default:
      return state
  }
}