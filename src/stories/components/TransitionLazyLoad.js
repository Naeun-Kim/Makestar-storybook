import LazyLoad from 'react-lazyload'
import React, { useState } from 'react'
import {CSSTransition} from 'react-transition-group'

function TransitionLazyLoad(props) {
  const [show, setShow] = useState(false);
    // let {children, ...props} = props

    let { children } = props

    return (
      <LazyLoad { ...props } onContentVisible={() => {
        setShow(true)
      }}>
        <CSSTransition
          in={show}
          timeout={500}
          classNames="fade"
        >
          {children}
        </CSSTransition>
      </LazyLoad>
    )
}

export default TransitionLazyLoad;