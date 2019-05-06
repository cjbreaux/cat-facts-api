import React from 'react';
import {connect} from 'react-redux';

function CatContainer({catFact}) {
  return(
    <div>
      <h1> hello cat </h1>
      <h2>{catFact}</h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    catFact: state.simpleReducer.catFact
  }
}

export default connect(mapStateToProps)(CatContainer);
