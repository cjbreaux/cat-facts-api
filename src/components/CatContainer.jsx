import React from 'react';
import {connect} from 'react-redux';
import { requestFact } from './../actions';
import { getCatFact } from './../actions';
import { receiveFact } from './../actions';

function CatContainer({catFact, dispatch}) {
  return(
    <div>
      <h1> hello cat </h1>
      <h2>{catFact}</h2>
      <button onClick={()=>dispatch(getCatFact())}>API CALL </button>
      <button onClick={()=>dispatch(receiveFact('this is a new one'))}>Test </button>
      <button onClick={()=>dispatch(requestFact())}>Dispatch Action </button>
      <button onClick={()=>window.responsiveVoice.speak(catFact, "UK English Male")}>Say Something</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    catFact: state.simpleReducer.catFact
  }
}

export default connect(mapStateToProps)(CatContainer);
