import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './App.scss';

import Extra from './Extra';

function App(props = {}) {
  console.log('App', 'props', props);
  return (
    <div className="wrapper">
      <div>
        <h1 className="greeting-text">{props.greeting}</h1>
        <Extra introduction={`My name is ${props.app.myName || 'Mario'}.`} />
      </div>
    </div>
  )
}

App.propTypes = {
  greeting: PropTypes.string.isRequired,
  myName: PropTypes.string
};

export default connect((state) => ({
  app: state.app,
}))(App);
