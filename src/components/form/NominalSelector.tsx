import { theme } from '@/config/emotion'
import { formatNumber } from '@/utils/utils'
import { css } from '@emotion/react'
import React from 'react'

const NominalSelector: React.FC<{
  setValue: {()},
  value: number,
  active?: boolean,
}> = ({active, value, setValue}) => {
  return (
    <div css={css`
      border-radius: 15px;
      background-color: ${active ? theme.blue: theme.lightblue};
      color: ${active ? "white": "black"};
      padding: 10px 15px;
    `} onClick={setValue} className="cursor-pointer mb-2">
      {
        value > 0 ?
        <span>Rp. {formatNumber(value)},-</span>
        :
        <span>Isi Sendiri</span>
      }
    </div>
  )
}

export default NominalSelector
