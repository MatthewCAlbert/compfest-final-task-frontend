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
import { mq, theme } from '@/config/emotion'
import ProgramDetailTemplate from '@/components/ProgramDetailTemplate'

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

          <ProgramDetailTemplate data={{
            id: "32",
            donator: 20,
            name: "John Doe",
            title: "Bantu Saya Beli PS5",
            amount: [10000,20000],
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem et ea, est in delectus, earum tempore ullam expedita voluptatum distinctio! Recusandae corrupti fuga aliquid libero! Veritatis ab amet excepturi."
          }}/>

          <div css={css`
              border-radius: 20px;
              background-color: ${theme.lightblue};    
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
      
      <BottomNavTemplate background="white">
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
