import React from 'react';

const Thumbnail = props => {
  return (
    <div className="card-thumbnail" style={props.bgImage}>
      {props.children}
    </div>
  );
};

export default Thumbnail;
