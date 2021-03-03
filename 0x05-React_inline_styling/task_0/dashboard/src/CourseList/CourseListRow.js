import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const bgColor1 = { backgroundColor: '#f5f5f5ab' };
  const bgColor2 = { backgroundColor: '#deb5b545' };
  let tr = undefined;

  if (isHeader === true) {
    if (textSecondCell === null) {
      tr = <th colSpan='2'>{textFirstCell}</th>;
    } else {
      tr = (
        <Fragment>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
    tr = (
      <Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }
  let bgColor = undefined;
  if (isHeader) {
    bgColor = bgColor2;
  } else {
    bgColor = bgColor1;
  }
  return <tr style={bgColor}>{tr}</tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
