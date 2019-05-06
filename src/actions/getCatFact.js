export default function getCatFact() {

    return fetch('https://cat-fact.herokuapp.com/facts/random?number=1').then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      console.log('Result from API:', json)
    });
  };
