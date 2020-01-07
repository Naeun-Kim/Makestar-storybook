import React from "react";
import PropTypes from 'prop-types';
import Icon from "./Icon";
import {ICONS} from "../constants/Icons";

function Avatar(props) {
  const { size, name, imageUrl, more } = props;
  return (
    <>
      {more ? (
          <span className={`avatar avatar-${size} avatar-more`}>
      </span>
        ) :
        <span className={`avatar avatar-${size}`}
              style={{ lineHeight: imageUrl ? '' : `${size}px` }}>
        {imageUrl ? (
          <img src={`${imageUrl}?d=100`} alt={name} />
        ) : (
          <Icon icon={ICONS.User} size="16" color="#fff"/>
        )}
      </span>
      }
    </>
  );
}

Avatar.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string
}

Avatar.defaultProps = {
}

export default Avatar;