import { css } from "@emotion/react";
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import clsx from "clsx";
import React, { useRef } from "react";

const LoadingScreen = ({show = false, enableScrollLock = true}) => {
  const ref = useRef();

  if( show && enableScrollLock ){
    if( ref && ref.current )
      disableBodyScroll(ref.current);
  }else{
    clearAllBodyScrollLocks();
  }

  return (
    <>
    <div css={css`
      position: fixed;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1100;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
    `}
      className={clsx( show ? "d-flex" : "d-none" )}
    >
      <div className="d-flex align-items-center flex-column justify-content-center vh-100 w-100 px-3 px-sm-5" ref={ref}>
        <div className="d-flex align-items-center flex-column justify-content-center">
          <div className="spinner-border text-info mb-3" role="status" css={css`
            width: 3rem; height: 3rem;
          `}>
            <span className="visually-hidden">body-scroll-lock...</span>
          </div>
          <h1 className="h5 text-center text-white fw-600">Sedang Memuat...</h1>
        </div>
      </div>
    </div>
    </>
    )
}

export default LoadingScreen