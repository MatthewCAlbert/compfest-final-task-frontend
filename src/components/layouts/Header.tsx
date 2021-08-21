import { cssVariables, mq } from '@/config/emotion'
import { css } from '@emotion/react'
import clsx from 'clsx';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import qs from 'query-string';

const Header: React.FC<{
  forceSearchOpen?: boolean,
  simpleBack?: boolean,
  customTitle?: string,
  customCallback?: {()}
}> = ({forceSearchOpen = false, simpleBack = false, ...props}) => {
  const history = useHistory();
  const isSearchPath = history.location.pathname === "/search";
  const [searchOpen, setSearchOpen] = useState((forceSearchOpen || isSearchPath));
  const [searchInput, setSearchInput] = useState(qs.parse(history.location.search).q || "");

  const onBack = ()=>{
    if( !forceSearchOpen && !isSearchPath && !simpleBack )
      setSearchOpen(false);
    else if( props?.customCallback )
      props.customCallback();
    else
      history.goBack();
  }

  const onSearch = (e: any)=>{
    e.preventDefault();
    history.push({
      pathname: "/search",
      search: qs.stringify({
        q: searchInput
      })
    })
  }

  return (
    <header css={css`
      position: fixed;
      z-index: 10;
      top: 0;
      display: flex;
      width: 100%;
      padding-top: 5px;
      justify-content: center;
      background-color: #00aeef;
      height: ${cssVariables.headerHeight};
      transition: .2s;
      &.search-active{
        background-color: white;
        border-bottom: 1px solid #ececec;
      }
      .app-logo{
        height: 40px;
      }
      .app-title{
        color: white;
        font-size: 1.3rem;
      }
      .header-inner{
        max-width: ${cssVariables.maxWidth};
        width: 100%;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `} className={clsx((searchOpen || simpleBack) && "search-active")}>
      <div className="header-inner">
        {
          !searchOpen && !simpleBack ?
          <>
            <div className="d-flex align-items-center no-select" css={css`
              cursor: default;
            `}>
              <img src="/logo.png" alt="logo" className="app-logo d-none d-sm-flex" />
              <img src="/logo-ext.png" alt="logo" className="app-logo d-sm-none" />
              <h1 className="app-title d-none d-sm-flex mb-0 ms-2">PentaPeduli</h1>
            </div>
            <div className="flex-grow-1 ms-3 d-flex justify-content-end">
              <div onClick={()=>setSearchOpen(true)} className="form-control" css={css`
                border-radius: 20px;
                height: 30px;
                max-width: 250px;
                cursor: text;
              `} />
            </div>
          </>
          :
          <>
            <div className="d-flex align-items-center">
              <i className="fas fa-chevron-left ms-2 cursor-pointer" onClick={onBack}></i>
            </div>
            <div className="flex-grow-1 ms-3">
              {
                !simpleBack ? (
                  <form onSubmit={onSearch} className="d-flex justify-content-end">
                    <input autoFocus type="text" autoComplete="off" onChange={(e)=>setSearchInput(e.target.value)} className="form-control" value={String(searchInput)} placeholder={`Coba cari "Dana Bansos"`} css={css`
                      border: none;
                    `} />
                  </form>
                ) : (
                  <h1 className="mb-0 h5 text-center me-4">{props.customTitle || ""}</h1>
                )
              }
            </div>
          </>
        }
      </div>
    </header>
  )
}

export default Header
