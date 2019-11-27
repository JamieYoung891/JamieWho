export const DATA_ACTION = {
  GET_DATA: {
    SUCCESS: "jamieWho/data/PUSH:success",
    FAILURE: "jamieWho/data/PUSH:failure"
  }
}

const initialState = {
  isFailure: false
}

export default function data(state = initialState, { type, payload }) {
  switch (type) {
    case DATA_ACTION.GET_DATA.SUCCESS:
      return { ...state, isPending: false, ...payload }
    case DATA_ACTION.GET_DATA.FAILURE:
      return { ...state, isPending: false, isFailure: payload }
    default:
      return state
  }
}