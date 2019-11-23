const SKILL_ACTION = {
  SET_NUM: 'jamieWho/ui/skill/SET_NUM',
  RESET_NUM: 'jamieWho/ui/skill/RESET_NUM',
  TOGGLE_OPEN: 'jamieWho/ui/skill/TOGGLE_OPEN'
}

export const setNum_skill = payload => ({ type: SKILL_ACTION.SET_NUM, payload })
export const resetNum_skill = () => ({ type: SKILL_ACTION.RESET_NUM })
export const toggleOpen_skill = () => ({ type: SKILL_ACTION.TOGGLE_OPEN })

const initialState = {
  num: undefined,
  open: false
}

export default function skill(state = initialState, { type, payload }) {
  switch (type) {
    
    case SKILL_ACTION.SET_NUM:
      return { ...state, num: payload }
      
    case SKILL_ACTION.RESET_NUM:
      return { ...state, num: undefined }

    case SKILL_ACTION.TOGGLE_OPEN:
      return { ...state, open: !state.open }
      
    default:
      return state
  }
}