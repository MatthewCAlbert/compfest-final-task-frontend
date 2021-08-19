import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import Header from '@/components/layouts/Header'
import { css } from '@emotion/react'
import { formatDateString, formatNumber } from '@/utils/utils'
import { theme } from '@/config/emotion'
import { useSelector } from '@/hooks/useReduxSelector'
import { useDispatch } from 'react-redux'
import { getUserDonationHistory } from '@/redux/actions/userActions'

const DonateHistoryItem = ({data}: {
  data: {
    amount?: number,
    date?: string,
    title: string
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
        <div>{data.title || "undefined"}</div>
        <div>{formatDateString(data.date, "DD MMMM YYYY HH:mm")}</div>
      </div>
      <div>
        Rp. {formatNumber(data.amount)},-
      </div>
    </div>
  )
}

const DonationHistoryPage = () => {
  const profile = useSelector((state)=> state.profile);
  const [fetched, setFetched] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(profile)
    if( !fetched || !profile?.donationHistory ){
      dispatch(getUserDonationHistory())
      setFetched(true);
    }
  }, [profile])

  return (
    <Layout enableHeader={false}>
      <Header customTitle="Riwayat Donasi" simpleBack={true}/>
      <SEO title="Riwayat Donasi"/>
      <section className="section">
        <div className="section-inner pt-4">
          {
            profile?.donationHistory?.response?.data?.map((el)=>(
              <DonateHistoryItem key={el.ID} data={{
                title: el?.donation_program?.title,
                amount: el?.amount,
                date: el?.CreatedAt
              }}/>
            ))
          }
        </div>
      </section>
    </Layout>
  )
}

export default DonationHistoryPage
