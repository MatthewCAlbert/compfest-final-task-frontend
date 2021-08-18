import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import clsx from 'clsx'
import { status } from '@/config/enums'

const ProgramItem = ({data}: {
  data: {
    id: string,
    status: status
    title: string
  }
})=>{
  return (
    <Link to={`/program/${data.id}`} css={css`
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background-color: lightgrey;
      padding: 15px;
    `} className="mb-2">
      <div>
        <div>{data.title}</div>
      </div>
      <div className="d-flex justify-content-end">
        <span className={clsx("badge", data.status === status.verified ? "bg-success" : data.status === status.unverified ? "bg-danger" : "bg-warning")}>
          {data.status === status.verified ? "Disetujui" : data.status === status.unverified ? "Ditolak" : "Menunggu Verifikasi"}
        </span>
      </div>
    </Link>
  )
}


const FundraiserProgramListPage = () => {
  return (
    <Layout> 
      <SEO title="Program Saya"/>
      <section className="section">
        <div className="section-inner pt-4 d-flex flex-column">
          <h1 className="h3 mb-3">Program Saya</h1>
          <div>
            <ProgramItem data={{
              id: "123",
              title: "Judul Saya",
              status: status.verified,
            }}/>
            <ProgramItem data={{
              id: "123",
              title: "Judul Saya",
              status: status.unverified,
            }}/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FundraiserProgramListPage
