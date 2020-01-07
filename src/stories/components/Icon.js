import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
  const styles = {
    svg: {
      display: 'inline-block'
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={styles.svg}
      className={props.class}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 20 20"
    >
      <path
        style={styles.path}
        d={props.icon}
      ></path>
    </svg>
  );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
}

export default Icon;
