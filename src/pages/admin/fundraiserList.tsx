import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import clsx from 'clsx'
import { css } from '@emotion/react'
import { status, statusEnum } from '@/config/enums'

const FundraiserItem = ({data}: {
  data: {
    id: string,
    status: statusEnum
    name: string
  }
})=>{
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background-color: lightgrey;
      padding: 15px;
    `} className="mb-2">
      <div>
        <div>{data.name}</div>
      </div>
      <div className="d-flex justify-content-end">
        <span className={clsx("badge", data.status === status.verified ? "bg-success" : data.status === status.unverified ? "bg-danger" : "bg-warning")}>
          {data.status === status.verified ? "Disetujui" : data.status === status.unverified ? "Ditolak" : "Menunggu Verifikasi"}
        </span>
      </div>
    </div>
  )
}

const AdminFundraiserListPage = () => {
  return (
    <Layout>
      <SEO title="Admin Fundraiser List"/>
      <section className="section">
        <div className="section-inner pt-4 d-flex flex-column">
          <h1 className="h3 mb-3">Daftar Fundraiser</h1>
          <div>
            <FundraiserItem data={{
              id: "123",
              name: "John Doe",
              status: status.pending,
            }}/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AdminFundraiserListPage
