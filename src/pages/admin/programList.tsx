import React, { useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { status, statusEnum } from '@/config/enums'
import { css } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { useSelector } from '@/hooks/useReduxSelector'
import { useEffect } from 'react'
import { getPendingProgram } from '@/redux/actions/adminActions'
import Skeleton from '@/components/Skeleton'
import { theme } from '@/config/emotion'

const ProgramItem = ({data}: {
  data: {
    id: string,
    status: statusEnum
    title: string
  }
})=>{
  return (
    <Link to={`/fundraiser/program/${data.id}`} css={css`
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background-color: ${theme.lightblue};
      padding: 15px;
    `} className="mb-2">
      <div>
        <div>{data.title}</div>
      </div>
      <div className="d-flex justify-content-end">
        <span className={clsx("badge", data.status === status.verified ? "bg-success" : data.status === status.unverified ? "bg-danger" : "bg-warning")}>
          {data.status === status.verified ? "Disetujui" : data.status === status.unverified ? "Ditolak" : "Menunggu Verifikasi"}
        </span>
      </div>
    </Link>
  )
}


const AdminProgramListPage = () => {
  const admin = useSelector((state)=>state.admin);
  const dispatch = useDispatch();

  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
    if( !fetched || !admin?.pendingProgram ){
      dispatch(getPendingProgram())
      setFetched(true);
    }
  },[admin]);

  return (
    <Layout> 
      <SEO title="Admin Program List"/>
      <section className="section">
        <div className="section-inner pt-4 d-flex flex-column">
          <h1 className="h3 mb-3">Daftar Program</h1>
          <div>
            {
              !admin?.pendingProgram?.response && <Skeleton/>
            }
            {
              admin?.pendingProgram?.response?.data?.length < 1 && (
                <p>Tidak ada program yang belum diverifikasi.</p>
              )
            }
            {
              admin?.pendingProgram?.response?.data?.map((el)=>(
                <ProgramItem key={el.ID} data={{
                  id: el.ID,
                  title: el?.title,
                  status: el?.status,
                }}/>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AdminProgramListPage
