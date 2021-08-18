import { cssVariables, mq, theme } from '@/config/emotion'
import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'
import BottomNavTemplate from './BottomNavTemplate'

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
    <BottomNavTemplate background="aliceblue">
      <div className="nav-inner">
        <NavLink href="/" title="Home" icon="fas fa-home"/>
        <NavLink href="/search" title="Donasi" icon="fas fa-hand-holding-usd"/>
        <NavLink href="/dompet" title="Dompet" icon="fas fa-wallet"/>
        <NavLink href="/inbox" title="Inbox" icon="fas fa-envelope"/>
        <NavLink href="/account" title="Akun" icon="fas fa-user"/>
      </div>
    </BottomNavTemplate>
  )
}

export default Nav
