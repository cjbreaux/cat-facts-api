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

export const catPic = (catURL) => ({
  type: types.CAT_PIC,
  catURL
})

export function getCatPic() {
  return function (dispatch) {
    return fetch('https://aws.random.cat/meow').then(
      response => response.json(),
      error => console.log('An error occurred', error)
    ).then(function(json) {
      console.log('Cat pic url', json.file)
      dispatch(catPic(json.file));
    })
  }
}


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
        window.responsiveVoice.speak(newFact, "UK English Male");
      } else {
        console.log('Not getting any cat facts');
      }
    });
  };
}
