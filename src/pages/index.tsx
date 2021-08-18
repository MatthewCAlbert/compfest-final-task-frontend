// @ts-nocheck
import MainHeroCarousel from '@/components/landing/MainHeroCarousel'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import ProgramItem from '@/components/ProgramItem'
import { roles } from '@/config/enums'
import { useSelector } from '@/hooks/useReduxSelector'
import { formatNumber } from '@/utils/utils'
import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage = () => {
  const auth = useSelector((state)=> state.auth);

  const role = roles.admin;
  
  return (
    <Layout>
      <SEO useSuffix={false}/>
      {
        auth.token && (
        <section className="section">
          <div className="section-inner pt-4">
            <h1 className="h4">Selamat Datang, Budi</h1>
            {
              role !== roles.admin ? (
                <>
                <div css={css`
                  border-radius: 10px;
                  background-color: lightgray;
                  padding: 10px 15px;
                `}>
                  <i className="fas fa-wallet me-3"></i>
                  <span>Rp. {formatNumber(1000000)},-</span>
                </div>
                <div className="mt-2">
                  {
                    role === roles.donor ? <>
                      <Link to="/dompet" className="btn btn-primary"><i className="fas fa-plus"></i> Topup</Link>
                      &nbsp;
                      <Link to="/dompet/history" className="btn btn-primary"><i className="fas fa-history"></i> Riwayat</Link>
                    </>
                    :
                    <>
                      <Link to="/fundme" className="btn btn-primary w-100 mb-2">Galang Dana</Link>
                      <Link to="/fundraiser/program" className="btn btn-primary w-100 ">Lihat Program Saya</Link>
                    </>
                  }
                </div>
                </>
              ):
              <div>
                  <Link to="/admin" className="btn btn-primary w-100">Masuk ke Dasbor Admin</Link>
              </div>
            }
          </div>
        </section>
        )
      }
      <MainHeroCarousel/>
      <section className="section">
        <div className="section-inner">
          <h2 className="mt-5 text-start w-100 h3">TERBARU</h2>
          <div>
            <ProgramItem data={{
              id: "3312",
              title: "Ini program",
              raised: [5000,20000],
              deadline: "12 Juli 2020",
              link: "/program/1111"
            }}/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
