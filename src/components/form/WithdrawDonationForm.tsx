import { theme } from '@/config/emotion';
import { useSelector } from '@/hooks/useReduxSelector';
import { clearCreateProgramWithdrawalRequestResponse, createProgramWithdrawalRequest } from '@/redux/actions/fundraiserActions';
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

const WithdrawDonationForm: React.FC<{
  title: string,
  collected: number,
  withdrawn: number,
  backCallback: {()}
}> = ({
  title,
  collected,
  withdrawn,
  backCallback
}) => {
  const {id} = useParams<{id: string}>();
  const fundraiser = useSelector((state)=> state.fundraiser);
  const dispatch = useDispatch();

  const availableToWithdraw = collected - withdrawn;

  const [loading, setLoading] = useState(false);
  const [donationDone, setDonationDone] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(-1);
  const [customDonation, setCustomDonation] = useState(1000);

  const donationList = [
    10000, 20000, 50000, 100000
  ]

  const handleWithdrawal = ()=>{
    if( selectedDonation < 0 ) return toast.error("Silahkan pilih nominal penarikan terlebih dahulu.");
    if( customDonation < 1000 && selectedDonation === donationList.length ) return toast.error("Silahkan masukan minimal 1000 rupiah.");
    const donateAmount = selectedDonation === donationList.length ? customDonation : donationList[selectedDonation];
    if( donateAmount > availableToWithdraw ) return toast.error("Tidak cukup dana untuk ditarik.");
    setLoading(true);
    dispatch(createProgramWithdrawalRequest(id, donateAmount));
  }

  useEffect(()=>{
    if( fundraiser.requestWithdrawal?.response ){
      toast.success("Berhasil Berdonasi!");
      dispatch(getUserWalletInfo());
      setDonationDone(true);
    }
    if( fundraiser.requestWithdrawal?.error ){
      toast.error(fundraiser.requestWithdrawal?.error?.response?.data?.message);
    }
    if( fundraiser.requestWithdrawal ){
      setLoading(false);
      dispatch(clearCreateProgramWithdrawalRequestResponse());
    }
  },[fundraiser.requestWithdrawal]);

  const renderedDonationList = useMemo(()=>{
    return donationList.map((el,index)=>(
      <NominalSelector active={ selectedDonation === index } value={el} key={index} setValue={()=>setSelectedDonation(index)}/>
    ))
  }, [selectedDonation])

  if( donationDone ) return <Redirect to="/fundraiser/program"/>

  return (
    <Layout enableNav={false}>
      <LoadingScreen show={loading}/>
      <Header simpleBack={true} customTitle="Penarikan Dana" customCallback={backCallback}/>
      <section className="section">
        <div className="section-inner pt-4">
          <div className="mb-4">
            <h1 className="h3 mb-3">{title}</h1>
            <div>Dana yang dikumpulkan: <strong>Rp. {formatNumber(collected)}</strong></div>
            <div>Dana yang tersedia untuk ditarik: <strong>Rp. {formatNumber(availableToWithdraw)}</strong></div>
          </div>
          <div css={css`
            border-radius: 20px;
            background-color: ${theme.darkblue};
            padding: 20px;
          `}>
            <p className="fw-bold text-white">Nominal Penarikan</p>
            {
              renderedDonationList
            }
            <NominalSelector active={ selectedDonation === donationList.length } value={0} setValue={()=>setSelectedDonation(donationList.length)}/>
            {
              selectedDonation === donationList.length && (
                <div>
                  <p className="fw-bold text-white mt-3">Isi Nominal Penarikan</p>
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
          <button className="btn btn-primary w-100 mx-3" onClick={handleWithdrawal}>Tarik Dana</button>
        </div>
      </BottomNavTemplate>
    </Layout>
  )
}

export default WithdrawDonationForm
