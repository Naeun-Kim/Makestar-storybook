import React from 'react';

const Description = props => {
  return (
    <div className="description">
      <span>{props.children}</span>
    </div>
  );
};

export default Description;
