import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import Header from '@/components/layouts/Header'
import { css } from '@emotion/react'
import { formatDateString, formatNumber } from '@/utils/utils'
import { theme } from '@/config/emotion'

const DonateHistoryItem = ({data}: {
  data: {
    amount?: number,
    date?: string,
    title: string
  }
})=>{
  return (
    <div css={css`
      border-radius: 10px;
      background-color: ${theme.lightblue};
      padding: 15px;
      display: flex;
      justify-content: space-between;
    `} className="mb-3">
      <div>
        <div>{data.title}</div>
        <div>{formatDateString(data.date, "DD MMMM YYYY")}</div>
      </div>
      <div>
        Rp. {formatNumber(data.amount)},-
      </div>
    </div>
  )
}

const DonationHistoryPage = () => {
  return (
    <Layout enableHeader={false}>
      <Header customTitle="Riwayat Donasi" simpleBack={true}/>
      <SEO title="Riwayat Donasi"/>
      <section className="section">
        <div className="section-inner pt-4">
          <DonateHistoryItem data={{
            title: "Program Saya Galang Dana Beli PS5",
            amount: 50000,
            date: "2022-07-2"
          }}/>
          <DonateHistoryItem data={{
            title: "Program Saya Galang Dana Beli PS5",
            amount: 50000,
            date: "2022-07-2"
          }}/>
        </div>
      </section>
    </Layout>
  )
}

export default DonationHistoryPage
