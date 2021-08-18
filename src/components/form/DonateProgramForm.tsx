import { formatNumber } from '@/utils/utils';
import { css } from '@emotion/react';
import React, { useState } from 'react'
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import BottomNavTemplate from '../layouts/BottomNavTemplate';
import Header from '../layouts/Header';
import Layout from '../layouts/Layout';
import NominalSelector from './NominalSelector';

const DonateProgramForm: React.FC<{
  backCallback: {()}
}> = ({
  backCallback
}) => {
  const {id} = useParams<{id: string}>();

  const [selectedDonation, setSelectedDonation] = useState(-1);
  const [customDonation, setCustomDonation] = useState(1000);

  const donationList = [
    10000, 20000, 50000, 100000
  ]

  const handleDonate = ()=>{
    if( customDonation < 1000 && selectedDonation === donationList.length ) return toast.error("Silahkan masukan minimal 1000 rupiah.");
  }

  const renderedDonationList = useMemo(()=>{
    return donationList.map((el,index)=>(
      <NominalSelector active={ selectedDonation === index } value={el} key={index} setValue={()=>setSelectedDonation(index)}/>
    ))
  }, [selectedDonation])

  return (
    <Layout enableNav={false}>
      <Header simpleBack={true} customTitle="Ini Judul" customCallback={backCallback}/>
      <section className="section">
        <div className="section-inner pt-4">
          <div css={css`
            border-radius: 20px;
            background-color: gray;
            padding: 20px;
          `}>
            <p className="fw-bold text-white">Nominal Donasi</p>
            {
              renderedDonationList
            }
            <NominalSelector active={ selectedDonation === donationList.length } value={0} setValue={()=>setSelectedDonation(donationList.length)}/>
            {
              selectedDonation === donationList.length && (
                <div>
                  <p className="fw-bold text-white mt-3">Isi Nominal Donasi</p>
                  <input type="number" min={1000} 
                  value={customDonation} onChange={(e)=>setCustomDonation(parseInt(e.target.value))}
                  className="form-control" autoFocus css={css`
                    border-radius: 15px;
                    padding: 10px 15px;
                  `} />
                  <div>
                    <small className="text-white mt-2 d-block">*Donasi mulai dari Rp. 1.000,-</small>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
      <BottomNavTemplate background="lightgrey">
        <div className="nav-inner" css={css`
          button{
            border-radius: 20px;
            padding: 10px 20px;
            font-weight: 600;
          }
        `}>
          <button className="btn btn-primary w-100 mx-3" onClick={handleDonate}>Berdonasi</button>
        </div>
      </BottomNavTemplate>
    </Layout>
  )
}

export default DonateProgramForm
