import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';

BodySection.defaultProps = {
  title: '',
};

BodySection.propTypes = {
  title: PropTypes.string,
};

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className='bodySection'>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export default BodySection;
