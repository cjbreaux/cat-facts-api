import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState, action) => {
 switch (action.type) {
  case types.NEW_FACT:
    console.log(state);
    return state;
  case types.REQUEST_FACT:
    let updatedSlice = Object.assign({}, state, {
      isFetching: true,
      catFact: action.catFact
    });
    console.log(updatedSlice);
    return updatedSlice;
  default:
   return state
 }
}
