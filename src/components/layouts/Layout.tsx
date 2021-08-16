/** @jsxImportSource @emotion/react */
import { cssVariables } from '@/config/emotion';
import { css } from '@emotion/react';
import React from 'react'
import { Toaster } from "react-hot-toast";
import Header from './Header';
import Nav from './Nav';

const Layout: React.FC = ({children, ...props}) => {
  return (
    <>
    <Header/>
    <Toaster position="bottom-center" reverseOrder={false} />
    <main css={css`
      flex-grow: 1;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      max-width: ${cssVariables.maxWidth};
      overflow: hidden;
      main#main{
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: ${cssVariables.headerHeight};
        padding-bottom: ${cssVariables.navHeight};
        background-color: white;
      }
    `}>
      <main id="main" className="mb-4">
        {children}
      </main>
      <Nav/>
    </main>
    </>
  )
}

export default Layout
