import { useSelector } from '@/hooks/useReduxSelector';
import { clearDonateDonationProgramResponse, donateDonationProgram } from '@/redux/actions/programActions';
import { getUserWalletInfo } from '@/redux/actions/userActions';
import { formatNumber } from '@/utils/utils';
import { css } from '@emotion/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import BottomNavTemplate from '../layouts/BottomNavTemplate';
import Header from '../layouts/Header';
import Layout from '../layouts/Layout';
import LoadingScreen from '../LoadingScreen';
import NominalSelector from './NominalSelector';

const DonateProgramForm: React.FC<{
  title: string,
  backCallback: {()}
}> = ({
  title,
  backCallback
}) => {
  const {id} = useParams<{id: string}>();
  const program = useSelector((state)=> state.program);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [donationDone, setDonationDone] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(-1);
  const [customDonation, setCustomDonation] = useState(1000);

  const donationList = [
    10000, 20000, 50000, 100000
  ]

  const handleDonate = ()=>{
    if( customDonation < 1000 && selectedDonation === donationList.length ) return toast.error("Silahkan masukan minimal 1000 rupiah.");
    const donateAmount = selectedDonation === donationList.length ? customDonation : donationList[selectedDonation];
    setLoading(true);
    dispatch(donateDonationProgram(id, donateAmount));
  }

  useEffect(()=>{
    if( program.sendDonation?.response ){
      toast.success("Berhasil Berdonasi!");
      dispatch(getUserWalletInfo());
      setDonationDone(true);
    }
    if( program.sendDonation?.error ){
      toast.error(program.sendDonation?.error?.response?.data?.message);
    }
    if( program.sendDonation ){
      setLoading(false);
      dispatch(clearDonateDonationProgramResponse());
    }
  },[program.sendDonation]);

  const renderedDonationList = useMemo(()=>{
    return donationList.map((el,index)=>(
      <NominalSelector active={ selectedDonation === index } value={el} key={index} setValue={()=>setSelectedDonation(index)}/>
    ))
  }, [selectedDonation])

  if( donationDone ) return <Redirect to="/"/>

  return (
    <Layout enableNav={false}>
      <LoadingScreen show={loading}/>
      <Header simpleBack={true} customTitle={title} customCallback={backCallback}/>
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
