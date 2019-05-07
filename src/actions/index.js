import * as types from './../constants/ActionTypes';

export const simpleAction = () => ({
  type: types.NEW_FACT
})

export const requestFact = () => ({
  type: types.REQUEST_FACT
})

export const receiveFact = (catFact) => ({
    type: types.RECEIVE_FACT,
    catFact
  })


export function getCatFact() {
  return function (dispatch) {
    return fetch('https://cat-fact.herokuapp.com/facts/random?number=1').then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      if (json.text) {
        let newFact = json.text;
        console.log(newFact);
        dispatch(receiveFact(newFact));
      } else {
        console.log('Not getting any cat facts');
      }
    });
  };
}
