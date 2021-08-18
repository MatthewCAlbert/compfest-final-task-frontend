import React, { useMemo, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import Header from '@/components/layouts/Header'
import { css } from '@emotion/react'
import { formatNumber } from '@/utils/utils'
import toast from 'react-hot-toast'
import NominalSelector from '@/components/form/NominalSelector'

const DompetPage = () => {
  const [selectedTopup, setSelectedTopup] = useState(-1);
  const [customTopup, setCustomTopup] = useState(20000);

  const topupList = [
    10000, 20000, 50000, 100000
  ]

  const handleTopUp = ()=>{
    if( customTopup < 1000 && selectedTopup === topupList.length ) return toast.error("Silahkan masukan minimal 20.000 rupiah.");
  }

  const renderedTopupList = useMemo(()=>{
    return topupList.map((el,index)=>(
      <NominalSelector active={ selectedTopup === index } value={el} key={index} setValue={()=>setSelectedTopup(index)}/>
    ))
  }, [selectedTopup])

  return (
    <Layout enableHeader={false}>
      <Header customTitle="eWallet Saya" simpleBack={true}/>
      <SEO title="Dompet Saya"/>
      <section className="section">
        <div className="section-inner pt-4">
          <div css={css`
            border-radius: 10px;
            background-color: lightgray;
            padding: 10px 15px;
          `}>
            <h2 className="mb-1 h6">
              Dana eWallet
            </h2>
            <div>
              <i className="fas fa-wallet me-3"></i>
              <span>Rp. {formatNumber(1000000)},-</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner pt-4">
          <div css={css`
            border-radius: 20px;
            background-color: gray;
            padding: 20px;
          `}>
            <p className="fw-bold text-white">Nominal Top Up</p>
            {
              renderedTopupList
            }
            <NominalSelector active={ selectedTopup === topupList.length } value={0} setValue={()=>setSelectedTopup(topupList.length)}/>
            {
              selectedTopup === topupList.length && (
                <div>
                  <p className="fw-bold text-white mt-3">Isi Nominal Top Up</p>
                  <input type="number" min={20000} 
                  value={customTopup} onChange={(e)=>setCustomTopup(parseInt(e.target.value))}
                  className="form-control" autoFocus css={css`
                    border-radius: 15px;
                    padding: 10px 15px;
                  `} />
                  <div>
                    <small className="text-white mt-2 d-block">*Topup mulai dari Rp. 20.000,-</small>
                  </div>
                </div>
              )
            }
          </div>
          <div>
            <button className="btn btn-primary w-100 mt-4" onClick={handleTopUp}>Topup</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DompetPage
