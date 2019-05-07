import * as types from './../constants/ActionTypes';

export const simpleAction = () => dispatch => {
 dispatch({
  type: types.NEW_FACT
 })
}

export const requestFact = (catFact) => ({
  type: types.REQUEST_FACT,
  catFact
})

export default function getCatFact() {
  return fetch('https://cat-fact.herokuapp.com/facts/random?number=1').then(
    response => response.json(),
    error => console.log('An error occured', error)
  ).then(function(json) {
    console.log('Result from API:', json)
  });
};
