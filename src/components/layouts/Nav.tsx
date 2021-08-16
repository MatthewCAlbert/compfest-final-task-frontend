/** @jsxImportSource @emotion/react */
import { cssVariables, mq, theme } from '@/config/emotion'
import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavLink: React.FC<{
  href: string,
  title: string,
  icon?: string
}> = ({href, title, icon, ...props})=>{
  return (
    <Link to={href} css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #5a5a5a;
      padding: 0 10px;
      width: 90px;
      padding-top: 10px;
      font-size: .83rem;
      ${mq.sm}{
        font-size: 1rem;
      }
      i{
        font-size: 1.13rem;
        ${mq.sm}{
          font-size: 1.5rem;
        }
      }
    `}>
      <span><i className={icon}></i></span>
      <span>{title}</span>
    </Link>
  )
}

const Nav = () => {
  return (
    <nav css={css`
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: ${cssVariables.maxWidth};
      height: ${cssVariables.navHeight};
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: aliceblue;
      border-top: 1px solid #e2e2e2;
      .nav-inner{
        padding: 0 5px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
      }
    `}>
      <div className="nav-inner">
        <NavLink href="/" title="Home" icon="fas fa-home"/>
        <NavLink href="/donasi" title="Donasi" icon="fas fa-hand-holding-usd"/>
        <NavLink href="/dompet" title="Dompet" icon="fas fa-wallet"/>
        <NavLink href="/inbox" title="Inbox" icon="fas fa-envelope"/>
        <NavLink href="/akun" title="Akun" icon="fas fa-user"/>
      </div>
    </nav>
  )
}

export default Nav
