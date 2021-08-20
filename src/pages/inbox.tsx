import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { theme } from '@/config/emotion'
import { useSelector } from '@/hooks/useReduxSelector'
import { useDispatch } from 'react-redux'
import { getAdminNotification } from '@/redux/actions/adminActions'
import Skeleton from '@/components/Skeleton'
import { capitalizeFirstLetter, formatDateString } from '@/utils/utils'

const InboxItem = ({data}: {
  data: {
    id: string,
    name: string,
    type: "fundraiser" | "withdraw" | "program",
    time: string,
  }
})=>{
  const notifTypes = {
    fundraiser: "fundraiser",
    withdraw: "withdrawal",
    program: "program",
  }

  return (
    <Link to={`/admin/${notifTypes[data.type]}`} css={css`
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background-color: ${theme.lightblue};
      padding: 15px;
      font-size: .83em;
    `} className="mb-2">
      <div>
        <div>{capitalizeFirstLetter(data.type)}</div>
        <div>Pemohon: <strong>{data.name}</strong></div>
      </div>
      <div className="d-flex justify-content-end">
        <div>
          <strong>{formatDateString(data.time, "DD-MMM-YYYY HH:mm")}</strong>
        </div>
      </div>
    </Link>
  )
}

const InboxPage = () => {
  const admin = useSelector((state)=>state.admin);
  const dispatch = useDispatch();

  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
    if( !fetched || !admin?.adminNotification ){
      dispatch(getAdminNotification())
      setFetched(true);
    }
    console.log(admin?.adminNotification)
  },[admin]);

  return (
    <Layout>
      <SEO title="Inbox"/>
      <section className="section">
        <div className="section-inner pt-4 d-flex flex-column">
          <h1 className="h3 mb-3">Program Saya</h1>
          <div>
            {
              !admin?.adminNotification?.response && <Skeleton/>
            }
            {
              admin?.adminNotification?.response?.data?.length < 1 && (
                <p>Tidak ada notifikasi.</p>
              )
            }
            {
              admin?.adminNotification?.response?.data?.map((el)=>(
                <InboxItem key={`${el.type}-${el.id}`} data={{
                  id: el.id,
                  name: el?.name,
                  type: el?.type,
                  time: el?.created_at,
                }}/>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default InboxPage
