import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar(props) {
  const { size, limited, stastics, percent } = props;
  return (
    <div className={
      `progress-bar progress-bar-${size}` +
      (limited ? ' progress-bar-limited' : '') +
      (stastics ? ' progress-bar-stastics' : '')
    }>
      {percent >= 100 ? (
        <span style={{ width: '100%', overflow: 'hidden' }}></span>
      ) : (
        <span style={{ width: `${percent}%`, overflow: 'hidden' }}></span>
      )}
    </div>
  )
}

ProgressBar.propTypes = {
  size: PropTypes.string,
  percent: PropTypes.number
}

ProgressBar.defaultProps = {
  size: 'sm',
  percent: 0
}

export default ProgressBar;