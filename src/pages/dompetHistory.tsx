import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import Header from '@/components/layouts/Header'
import { css } from '@emotion/react'
import { formatDateString, formatNumber } from '@/utils/utils'
import { theme } from '@/config/emotion'
import { useDispatch } from 'react-redux'
import { useSelector } from '@/hooks/useReduxSelector'
import { getUserWalletHistory } from '@/redux/actions/userActions'
import Skeleton from '@/components/Skeleton'

const DompetHistoryItem = ({data}: {
  data: {
    amount?: number,
    date?: string,
    type: string
  }
})=>{
  return (
    <div css={css`
      border-radius: 10px;
      background-color: ${theme.lightblue};
      padding: 15px;
      display: flex;
      justify-content: space-between;
    `} className="mb-3">
      <div>
        <div>{data.type}</div>
        <div>{formatDateString(data.date, "DD MMMM YYYY")}</div>
      </div>
      <div>
        Rp. {formatNumber(data.amount)},-
      </div>
    </div>
  )
}

const DompetHistoryPage = () => {
  const profile = useSelector((state)=> state.profile);
  const [fetched, setFetched] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(profile)
    if( !fetched || !profile?.walletHistory ){
      dispatch(getUserWalletHistory())
      setFetched(true);
    }
  }, [profile])

  return (
    <Layout enableHeader={false}>
      <Header customTitle="Riwayat eWallet" simpleBack={true}/>
      <SEO title="Riwayat Dompet"/>
      <section className="section">
        <div className="section-inner pt-4">
          {
            !profile?.walletHistory?.response && <Skeleton/>
          }
          {
            profile?.walletHistory?.response?.data?.length < 1 && (
              <p>Tidak ada riwayat transaksi.</p>
            )
          }
          {
            profile?.walletHistory?.response?.data?.map((el, index)=>(
              <DompetHistoryItem key={index} data={{
                type: el?.action,
                amount: el?.amount,
                date: el?.date
              }}/>
            ))
          }
        </div>
      </section>
    </Layout>
  )
}

export default DompetHistoryPage
