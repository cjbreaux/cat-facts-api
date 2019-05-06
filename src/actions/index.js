import * as types from './../constants/ActionTypes';

export const simpleAction = () => dispatch => {
 dispatch({
  type: types.NEW_FACT,
  payload: 'result_of_simple_action'
 })
}

export default function getCatFact() {
  return fetch('https://cat-fact.herokuapp.com/facts/random?number=1').then(
    response => response.json(),
    error => console.log('An error occured', error)
  ).then(function(json) {
    console.log('Result from API:', json)
  });
};
