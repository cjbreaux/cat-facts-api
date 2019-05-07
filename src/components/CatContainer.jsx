import React from 'react';
import {connect} from 'react-redux';
import getCatFact from './../actions/getCatFact'
import { requestFact } from './../actions';

function CatContainer({catFact, dispatch}) {
  return(
    <div>
      <h1> hello cat </h1>
      <h2>{catFact}</h2>
      <button onClick={getCatFact}>API CALL </button>
      <button onClick={()=>dispatch(requestFact('this is a new one'))}>Dipatch Action </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    catFact: state.simpleReducer.catFact
  }
}

export default connect(mapStateToProps)(CatContainer);
