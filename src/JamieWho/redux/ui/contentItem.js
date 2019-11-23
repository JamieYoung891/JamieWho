const CONTENT_ITEM_ACTION = {
  SET_NUM: 'jamieWho/ui/contentItem/SET:num',
  RESET_NUM: 'jamieWho/ui/contentItem/RESET:num'
}

export const setNum_contentItem = payload => ({ type: CONTENT_ITEM_ACTION.SET_NUM, payload })
export const resetNum_contentItem = () => ({ type: CONTENT_ITEM_ACTION.RESET_NUM })

const initialState = { num: 0 }

export default function contentItem(state = initialState, { type, payload }) {
  switch (type) {
    
    case CONTENT_ITEM_ACTION.SET_NUM:
      return { num: payload }

    case CONTENT_ITEM_ACTION.RESET_NUM:
      return { ...initialState }

    default:
      return state
  }
}