import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState, action) => {
 switch (action.type) {
  case types.NEW_FACT:
    console.log(state);
    return state;
  default:
   return state
 }
}
