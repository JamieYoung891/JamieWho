const SKILL_ACTION = {
  ENTER: 'jamieWho/ui/skill/ENTER',
  LEAVE: 'jamieWho/ui/skill/LEAVE'
}

export const enterSkill = payload => ({ type: SKILL_ACTION.ENTER, payload })
export const leaveSkill = () => ({ type: SKILL_ACTION.LEAVE })

const initialState = {
  name: null,
  toShow: false
}

export default function skill(state = initialState, { type, payload }) {
  switch (type) {

    case SKILL_ACTION.ENTER:
      return { name: payload, toShow: true }

    case SKILL_ACTION.LEAVE:
      return { ...state, toShow: false }

    default:
      return state
  }
}