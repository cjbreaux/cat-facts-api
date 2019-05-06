import React from 'react';
import {connect} from 'react-redux';
import getCatFact from './../actions/getCatFact'

function CatContainer({catFact}) {
  return(
    <div>
      <h1> hello cat </h1>
      <h2>{catFact}</h2>
      <button onClick={getCatFact}>Get Another Cat Fact</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    catFact: state.simpleReducer.catFact
  }
}

export default connect(mapStateToProps)(CatContainer);
