import React, {PropTypes} from 'react';
import './App.scss';

import Extra from './Extra';

function App(props = {}) {
  return (
    <div className="wrapper">
      <div>
        <h1 className="greeting-text">{props.greeting}</h1>
        <Extra introduction={`My name is ${props.myName || 'Mario'}.`} />
      </div>
    </div>
  )
}

App.propTypes = {
  greeting: PropTypes.string.isRequired,
  myName: PropTypes.string
};

export default App;
