/** @jsxImportSource @emotion/react */
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
    <Link to={data?.link || ""} className="no-select mb-3" css={css`
      display: block;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      background-color: rgba(0,0,0,0.1);
    `}>
      <div css={css`
        height: 150px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        background-color: aqua;
        .label{
          border-radius: 10px;
          background-color: yellow;
          position: absolute;
          bottom: 10px;
          right: 10px;
          padding: 3px 10px;
          font-size: .73rem;
        }
      `}>
        <div className="label">
          sampai {data.deadline}
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
          background-color: lightgray;
          & > div{
            height: 10px;
            background-color: azure;
          }
        `}>
          <div style={{width: `${percentage}%`}}></div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex flex-column">
            <span>Rp {data.raised[0]}</span>
            <span>Terkumpul</span>
          </div>
          <div className="d-flex flex-column align-items-end">
            <span>Rp {data.raised[1]}</span>
            <span>Target</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProgramItem
