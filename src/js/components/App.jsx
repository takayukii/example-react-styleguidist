import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './App.scss';

import Extra from './Extra';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <h1 className="greeting-text">{this.props.greeting}</h1>
          <button onClick={this.onClick}>Introduction</button>
          <div style={{display: this.state.isOpen ? 'block' : 'none'}}>
            <Extra introduction={`My name is ${this.props.app.myName || 'Mario'}.`} />
          </div>
        </div>
      </div>
    );
  }

  onClick(e) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

App.propTypes = {
  /**
   * This is description.
   */
  greeting: PropTypes.string
};
App.defaultProps = {
  greeting: 'Good morning'
};

export default connect((state) => ({
  app: state.app,
}))(App);
