import { cssVariables } from '@/config/emotion'
import { css } from '@emotion/react'
import React from 'react'

const BottomNavTemplate: React.FC<{
  background?: string
}> = ({background = "white", children, ...props}) => {
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
      background-color: ${background};
      border-top: 1px solid #e2e2e2;
      .nav-inner{
        padding: 0 5px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
      }
    `} {...props}>
      {children}
    </nav>
  )
}

export default BottomNavTemplate
