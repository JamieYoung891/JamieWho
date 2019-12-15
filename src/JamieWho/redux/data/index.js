export const DATA_ACTION = {
  GET_DATA: {
    SUCCESS: "jamieWho/data/PUSH:success",
    FAILURE: "jamieWho/data/PUSH:failure"
  }
}

export const actionCreator_data = {
  getData : {
    success: data => ({type: DATA_ACTION.GET_DATA.SUCCESS, payload: data}),
    failure: error => ({type: DATA_ACTION.GET_DATA.FAILURE, payload: error})
  }
}

const initialState = {
  isFailure: false
}

export default function data(state = initialState, { type, payload }) {
  switch (type) {
    case DATA_ACTION.GET_DATA.SUCCESS:
      return { ...state, ...payload }
    case DATA_ACTION.GET_DATA.FAILURE:
      return { ...state, isFailure: payload }
    default:
      return state
  }
}