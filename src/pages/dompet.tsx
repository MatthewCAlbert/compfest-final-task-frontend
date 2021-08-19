import React, { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import Header from '@/components/layouts/Header'
import { css } from '@emotion/react'
import { formatNumber } from '@/utils/utils'
import toast from 'react-hot-toast'
import NominalSelector from '@/components/form/NominalSelector'
import { theme } from '@/config/emotion'
import LoadingScreen from '@/components/LoadingScreen'
import { useDispatch } from 'react-redux'
import { clearTopUpUserWalletResponse, getUserWalletInfo, topUpUserWallet } from '@/redux/actions/userActions'
import { useSelector } from '@/hooks/useReduxSelector'
import { Redirect } from 'react-router-dom'

const DompetPage = () => {
  const [loading, setLoading] = useState(false);
  const [topUpDone, setTopUpDone] = useState(false);
  const [selectedTopup, setSelectedTopup] = useState(-1);
  const [customTopup, setCustomTopup] = useState(20000);

  const profile = useSelector((state)=> state.profile);
  const dispatch = useDispatch();

  const topupList = [
    10000, 20000, 50000, 100000
  ]

  const handleTopUp = ()=>{
    if( customTopup < 1000 && selectedTopup === topupList.length ) return toast.error("Silahkan masukan minimal 20.000 rupiah.");
    const topupAmount = selectedTopup === topupList.length ? customTopup : topupList[selectedTopup];
    setLoading(true);
    dispatch(topUpUserWallet(topupAmount));
  }

  useEffect(()=>{
    if( profile.topUp?.response ){
      toast.success("Berhasil Top Up!");
      dispatch(getUserWalletInfo());
      setTopUpDone(true);
    }
    if( profile.topUp?.error ){
      toast.error(profile.topUp?.error?.response?.data?.message);
    }
    if( profile.topUp ){
      setLoading(false);
      dispatch(clearTopUpUserWalletResponse());
    }
  },[profile.topUp]);

  const renderedTopupList = useMemo(()=>{
    return topupList.map((el,index)=>(
      <NominalSelector active={ selectedTopup === index } value={el} key={index} setValue={()=>setSelectedTopup(index)}/>
    ))
  }, [selectedTopup])

  if( topUpDone ) return <Redirect to="/"/>

  return (
    <Layout enableHeader={false}>
      <LoadingScreen show={loading}/>
      <Header customTitle="eWallet Saya" simpleBack={true}/>
      <SEO title="Dompet Saya"/>
      <section className="section">
        <div className="section-inner pt-4">
          <div css={css`
            border-radius: 10px;
            background-color: ${theme.blue};
            padding: 10px 15px;
            color: white;
          `}>
            <h2 className="mb-1 h6">
              Dana eWallet
            </h2>
            <div>
              <i className="fas fa-wallet me-3"></i>
              <span>Rp. {formatNumber(profile?.wallet?.response || 0)},-</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner pt-4">
          <div css={css`
            border-radius: 20px;
            background-color: ${theme.darkblue};
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
