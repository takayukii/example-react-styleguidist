import React, {PropTypes} from 'react';
import './App.scss';

App.propTypes = {
  greeting: PropTypes.string.isRequired
};

function App(props = {}) {
  return (
    <div className="wrapper">
      <div>
        <h1 className="greeting-text">{props.greeting}</h1>
      </div>
    </div>
  )
}

export default App;
