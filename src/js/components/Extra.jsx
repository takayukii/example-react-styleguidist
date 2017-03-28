import React, {PropTypes} from 'react';
import './Extra.scss';

function Extra(props = {}) {
  return (
    <div className="introduction">
      <p>{props.introduction}</p>
    </div>
  )
}

Extra.propTypes = {
  introduction: PropTypes.string.isRequired,
};

export default Extra;
