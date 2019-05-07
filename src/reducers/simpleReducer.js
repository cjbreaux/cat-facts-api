import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState, action) => {
  let updatedSlice;
 switch (action.type) {
  case types.NEW_FACT:
    console.log(state);
    return state;
  case types.REQUEST_FACT:
     updatedSlice = Object.assign({}, state, {
      isFetching: true
    });
    console.log(updatedSlice);
    return updatedSlice;
  case types.RECEIVE_FACT:
     updatedSlice = Object.assign({}, state, {
      isFetching: false,
      catFact: action.catFact
    })
    console.log(updatedSlice);
    return updatedSlice;
  default:
   return state
 }
}
