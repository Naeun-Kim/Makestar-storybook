import React from 'react';
import classnames from 'classnames'

const Progress = props => {
  return <div className={classnames(
            "card-progress",
            {limited: props.limited}
  )}>{props.children}</div>;
};

export default Progress;
