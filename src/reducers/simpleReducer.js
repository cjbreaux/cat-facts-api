export default (state = {catFact: 'This is a test cat fact.'}, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION':
   return state;
  default:
   return state
 }
}
