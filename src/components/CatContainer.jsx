import React from 'react';
import {connect} from 'react-redux';
import { requestFact } from './../actions';
import { getCatFact } from './../actions';
import { receiveFact } from './../actions';
import { getCatPic } from './../actions';

function CatContainer({catFact, catURL, dispatch}) {
  return(
    <div>
      <h1> hello cat </h1>
      <h2>{catFact}</h2>
      <button onClick={()=>dispatch(getCatFact())}>API CALL </button>
      <button onClick={()=>dispatch(receiveFact('this is a new one'))}>Test </button>
      <button onClick={()=>dispatch(requestFact())}>Dispatch Action </button>
      <button onClick={()=>dispatch(getCatPic())}>CatPicCall</button>
      <img src={catURL}></img>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    catFact: state.simpleReducer.catFact,
    catURL: state.simpleReducer.catURL
  }
}

export default connect(mapStateToProps)(CatContainer);
