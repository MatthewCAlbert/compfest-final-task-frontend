import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import Header from '@/components/layouts/Header'
import { css } from '@emotion/react'
import { formatDateString, formatNumber } from '@/utils/utils'

const DompetHistoryItem = ({data}: {
  data: {
    amount?: number,
    date?: string,
    type: string
  }
})=>{
  return (
    <div css={css`
      border-radius: 10px;
      background-color: lightgrey;
      padding: 15px;
      display: flex;
      justify-content: space-between;
    `} className="mb-3">
      <div>
        <div>Donasi</div>
        <div>{formatDateString(data.date, "DD MMMM YYYY")}</div>
      </div>
      <div>
        Rp. {formatNumber(data.amount)},-
      </div>
    </div>
  )
}

const DompetHistoryPage = () => {
  return (
    <Layout enableHeader={false}>
      <Header customTitle="Riwayat eWallet" simpleBack={true}/>
      <SEO title="Riwayat Dompet"/>
      <section className="section">
        <div className="section-inner pt-4">
          <DompetHistoryItem data={{
            type: "Donasi",
            amount: 50000,
            date: "2022-07-2"
          }}/>
          <DompetHistoryItem data={{
            type: "Topup",
            amount: 50000,
            date: "2022-07-2"
          }}/>
        </div>
      </section>
    </Layout>
  )
}

export default DompetHistoryPage
