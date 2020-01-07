import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { size, outline, color, shadow, arrow, icon, disabled, children } = props;
  return (
    <button className={
      `button button-${size}` +
      (outline ? ' button-outline' : '') +
      ((outline && color) ? ` button-outline-${color}` : '') +
      ((!outline && color) ? ` button-${color}` : '') +
      (shadow ? ' button-shadow' : '') +
      (arrow ? ' button-arrow' : '') +
      (icon ? ' button-icon' : '') +
      (disabled ? ' button-disabled' : '')
    }>{children}</button>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

Button.defaultProps = {
  size: 'md',
  color: ''
}

export default Button;