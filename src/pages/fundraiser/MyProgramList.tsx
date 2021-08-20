import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import clsx from 'clsx'
import { status, statusEnum } from '@/config/enums'
import { theme } from '@/config/emotion'
import { useSelector } from '@/hooks/useReduxSelector'
import { useDispatch } from 'react-redux'
import { getAllFundraiserProgram } from '@/redux/actions/fundraiserActions'
import Skeleton from '@/components/Skeleton'

const ProgramItem = ({data}: {
  data: {
    id: string,
    status: statusEnum
    title: string
  }
})=>{
  return (
    <Link to={`/program/${data.id}`} css={css`
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


const FundraiserProgramListPage = () => {
  const fundraiser = useSelector((state)=>state.fundraiser);
  const dispatch = useDispatch();

  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
    if( !fetched || !fundraiser?.fundraiserProgram ){
      dispatch(getAllFundraiserProgram())
      setFetched(true);
    }
    console.log(fundraiser?.fundraiserProgram)
  },[fundraiser]);

  return (
    <Layout> 
      <SEO title="Program Saya"/>
      <section className="section">
        <div className="section-inner pt-4 d-flex flex-column">
          <h1 className="h3 mb-3">Program Saya</h1>
          <div>
            {
              !fundraiser?.fundraiserProgram?.response && <Skeleton/>
            }
            {
              fundraiser?.fundraiserProgram?.response?.data?.length < 1 && (
                <p>Anda belum memiliki program apapun.
                  <br />
                  <Link to="/fundme" className="text-primary">Klik di sini untuk mulai galang dana</Link>
                </p>
              )
            }
            {
              fundraiser?.fundraiserProgram?.response?.data?.map((el)=>(
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

export default FundraiserProgramListPage
