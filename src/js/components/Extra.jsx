import React, {Component, PropTypes} from 'react';
import './Extra.scss';

class Extra extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="introduction">
        <p>{this.props.introduction}</p>
      </div>
    )
  }
}

Extra.propTypes = {
  introduction: PropTypes.string.isRequired,
};

export default Extra;
