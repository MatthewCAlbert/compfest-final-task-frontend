import { theme } from '@/config/emotion';
import { formatDateString, formatNumber } from '@/utils/utils';
import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom';

const ProgramItem: React.FC<{
  data: {
    title: string,
    raised: [number, number],
    deadline: string,
    photo?: string,
    id: string,
    link?: string
  }
}> = ({data, ...props}) => {
  const percentage = data.raised[0]/data.raised[1]*100;

  return (
    <Link to={data?.link || ""} className="no-select mb-3 shadow-sm" css={css`
      display: block;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      background-color: ${theme.lightblue};
    `}>
      <div css={css`
        height: 50px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        background-color: ${theme.darkblue};
        .label{
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: .73rem;
        }
      `}>
        <div className="label badge bg-warning text-dark">
          sampai {formatDateString(data.deadline, "DD-MMM-YYYY")}
        </div>
      </div>
      <div css={css`
        height: 90px;
        padding: 10px 15px;
        font-size: .73rem;
        .h6{
          font-size: .83rem;
        }
      `}>
        <h1 className="h6">{data.title}</h1>
        <div css={css`
          margin: 5px 0;
          border-radius: 20px;
          overflow: hidden;
          width: 100%;
          height: 10px;
          background-color: white;
          & > div{
            height: 10px;
            background-color: ${theme.blue};
          }
        `}>
          <div style={{width: `${percentage}%`}}></div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex flex-column">
            <span>Rp {formatNumber(data?.raised[0] || 0)}</span>
            <span>Terkumpul</span>
          </div>
          <div className="d-flex flex-column align-items-end">
            <span>Rp {formatNumber(data?.raised[1] || 0)}</span>
            <span>Target</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProgramItem
