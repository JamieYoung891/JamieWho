const DATA_ACTION = {
  PUSH: "jamieWho/data/PUSH"
};

export const push_data = payload => ({ type: DATA_ACTION.PUSH, payload });

export default function data(state = {}, { type, payload }) {
  if (type === DATA_ACTION.PUSH) return { ...state, [payload.name]: payload };
  else return state;
}