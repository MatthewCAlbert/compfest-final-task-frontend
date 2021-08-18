import { theme } from '@/config/emotion';
import { formatNumber } from '@/utils/utils';
import { css } from '@emotion/react'
import React from 'react'

const ProgramDetailTemplate = ({data, adminMode = false}: {
  data: {
    id?: string,
    name?: string,
    title?: string,
    donator?: number,
    amount?: [number, number],
    content?: string
  },
  adminMode?: boolean
}) => {
  const percentage = data?.amount[0]/data?.amount[1]*100;

  return (
    <div css={css`
      border-radius: 20px;
      overflow: hidden;
    `} className="shadow">
      <div css={css`
        background-color: ${theme.darkblue};
        width: 100%;
        height: 150px;
        position: relative;
        & > div{
          position: absolute;
          bottom: 20px;
          left: 25px;
          color: white;
        }
      `}>
        <div className="d-flex align-items-center">
          <div css={css`
            width: 45px;
            height: 45px;
            border-radius: 45px;
            background-color: ${theme.blue};
          `}></div>
          <div className="ms-3">
            <span className="d-block"><small>Diajukan oleh</small></span>
            <span className="d-block h6 mb-0">{data?.name}</span>
          </div>
        </div>
      </div>
      <div className="px-3 py-4" css={css`
        font-size: .9em;
      `}>
        <h1 className="h4 fw-bold">{data?.title}</h1>
        <p className="mb-1">{data?.donator} Donatur</p>
        
        {
          !adminMode && (
            <div css={css`
              margin: 5px 0;
              border-radius: 20px;
              overflow: hidden;
              width: 100%;
              height: 10px;
              background-color: lightgray;
              & > div{
                height: 10px;
                background-color: ${theme.blue};
              }
            `}>
              <div style={{width: `${percentage}%`}}></div>
            </div>
          )
        }
        <div className="d-flex justify-content-between w-100">
          {
            !adminMode && (
              <div className="d-flex flex-column">
                <span>Rp {formatNumber(data?.amount[0])}</span>
                <span>Terkumpul</span>
              </div>
            )
          }
          <div className="d-flex flex-column align-items-end">
            <span>Rp {formatNumber(data?.amount[1])}</span>
            <span>Target</span>
          </div>
        </div>

      </div>
      <div css={css`
        border-radius: 20px;
        background-color: ${theme.blue};
        padding: 20px;
        color: white;
        font-size: .9em;
      `}>
          <h2 className="h5 fw-bold">Mari Bantu {data?.name}</h2>
          <p>{data?.content}</p>
      </div>
    </div>
  )
}

export default ProgramDetailTemplate
