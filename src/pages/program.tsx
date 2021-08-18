import React, { useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { css } from '@emotion/react'
import { useParams } from 'react-router-dom'
import { formatNumber } from '@/utils/utils'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import BottomNavTemplate from '@/components/layouts/BottomNavTemplate'
import DonateProgramForm from '@/components/form/DonateProgramForm'
import Header from '@/components/layouts/Header'
import { useSelector } from '@/hooks/useReduxSelector'
import toast from 'react-hot-toast'
import { mq } from '@/config/emotion'

const DonatorItem: React.FC<{
  data: {
     name: string,
     donation: number,
     when: string
  }
}> = ({data})=>{
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between mb-3">
      <div className="d-flex align-items-center">
        <div css={css`
          width: 40px;
          height: 40px;
          border-radius: 40px;
          background-color: white;
        `}></div>
        <div className="ms-3 d-flex flex-column">
          <span className="d block">{data.name}</span>
          <span className="d block">Donasi <strong>Rp. {formatNumber(data.donation)}</strong></span>
        </div>
      </div>
      <div>
        <span className="d-block text-end">{data.when}</span>
      </div>
    </div>
  )
}

const ProgramPage = () => {
  const {id} = useParams<{id: string}>();
  const auth = useSelector((state)=> state.auth);
  const [donationOpen, setDonationOpen] = useState(false);
  const percentage = 70;

  if( donationOpen ){
    return <DonateProgramForm backCallback={()=>setDonationOpen(false)}/>
  }

  const handleOpenDonation = ()=>{
    if( auth.token )
      setDonationOpen(true);
    else
      toast.error("Silahkan login terlebih dahulu.");
  }

  return (
    <>
    <SEO title="Program"/>
    <Layout enableNav={false}>
      <Header simpleBack={true}/>
      <section className="section">
        <div className="section-inner pt-4">
          <div css={css`
            border-radius: 20px;
            overflow: hidden;
          `} className="shadow">
            <div css={css`
              background-color: grey;
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
                  background-color: lightgray;
                `}></div>
                <div className="ms-3">
                  <span className="d-block"><small>Diajukan oleh</small></span>
                  <span className="d-block h6 mb-0">John Doe</span>
                </div>
              </div>
            </div>
            <div className="px-3 py-4" css={css`
              font-size: .9em;
            `}>
              <h1 className="h4 fw-bold">Judul Galang Dana {id}</h1>
              <p className="mb-1">20 Donatur</p>
              
              <div css={css`
                margin: 5px 0;
                border-radius: 20px;
                overflow: hidden;
                width: 100%;
                height: 10px;
                background-color: lightgray;
                & > div{
                  height: 10px;
                  background-color: grey;
                }
              `}>
                <div style={{width: `${percentage}%`}}></div>
              </div>
              <div className="d-flex justify-content-between w-100">
                <div className="d-flex flex-column">
                  <span>Rp 0</span>
                  <span>Terkumpul</span>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <span>Rp 20.000</span>
                  <span>Target</span>
                </div>
              </div>

            </div>
            <div css={css`
              border-radius: 20px;
              background-color: lightgrey;
              padding: 20px;
              font-size: .9em;
            `}>
                <h2 className="h5 fw-bold">Mari Bantu X</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero purus, tristique id lacus eu, mattis suscipit quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin quis ullamcorper velit. </p>
            </div>
          </div>

          <div css={css`
              border-radius: 20px;
              background-color: lightgray;    
              padding: 20px;
              font-size: .83em;    
              ${mq.sm}{
                font-size: .9em;  
              }
            `} className="mt-4 shadow">
            <h2 className="h5 fw-bold mb-3">Para Donatur (10)</h2>
            <div>
              <DonatorItem data={{
                name: "Budi",
                donation: 20000,
                when: "2 jam yang lalu"
              }}/>
              <DonatorItem data={{
                name: "Budi",
                donation: 20000,
                when: "2 jam yang lalu"
              }}/>
              <DonatorItem data={{
                name: "Budi",
                donation: 20000,
                when: "2 jam yang lalu"
              }}/>
              <div>
                <small>*Hanya data terbaru yang ditampilkan.</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BottomNavTemplate background="lightgrey">
        <div className="nav-inner" css={css`
          button{
            border-radius: 20px;
            padding: 10px 20px;
            width: 150px;
            font-weight: 600;
            font-size: .9em;
          }
        `}>
          <CopyToClipboard text={`${window.location.href}`} onCopy={()=>toast.success("Tautan berhasil disalin!")}>
            <button className="btn btn-primary">Bagikan</button>
          </CopyToClipboard>
          <button className="btn btn-primary" onClick={handleOpenDonation}>Berdonasi</button>
        </div>
      </BottomNavTemplate>
    </Layout>
    </>
  )
}

export default ProgramPage
