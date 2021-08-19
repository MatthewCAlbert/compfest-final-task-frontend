import MainHeroCarousel from '@/components/landing/MainHeroCarousel'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import ProgramItem from '@/components/ProgramItem'
import { theme } from '@/config/emotion'
import { roles } from '@/config/enums'
import { useSelector } from '@/hooks/useReduxSelector'
import { getDonationProgramList } from '@/redux/actions/programActions'
import { capitalizeFirstLetter, formatNumber } from '@/utils/utils'
import { css } from '@emotion/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const IndexPage = () => {
  const [fetched, setFetched] = useState(false);
  const auth = useSelector((state)=> state.auth);
  const profile = useSelector((state)=> state.profile);
  const program = useSelector((state)=> state.program);

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(program)
    if( !fetched || !program?.programList ){
      dispatch(getDonationProgramList())
      setFetched(true);
    }
  }, [program])

  const role = auth?.user?.role;
  
  return (
    <Layout>
      <SEO useSuffix={false}/>
      {
        auth.token && (
        <section className="section">
          <div className="section-inner pt-4">
            <h1 className="h4">Selamat Datang, {capitalizeFirstLetter(auth?.user?.name)}</h1>
            {
              role && role !== roles.admin && (
                <>
                <div css={css`
                  border-radius: 10px;
                  background-color: ${theme.lightblue};
                  padding: 10px 15px;
                `}>
                  <i className="fas fa-wallet me-3"></i>
                  <span>Rp. {formatNumber(profile?.wallet?.response)},-</span>
                </div>
                <div className="mt-2">
                  {
                    role === roles.donor ? <>
                      <Link to="/dompet" className="btn btn-primary"><i className="fas fa-plus"></i> Topup</Link>
                      &nbsp;
                      <Link to="/dompet/history" className="btn btn-primary"><i className="fas fa-history"></i> Riwayat</Link>
                    </>
                    :
                    <>
                      <Link to="/fundme" className="btn btn-primary w-100 mb-2">Galang Dana</Link>
                      <Link to="/fundraiser/program" className="btn btn-primary w-100 ">Lihat Program Saya</Link>
                    </>
                  }
                </div>
                </>
              )
            }
            {
              role && role === roles.admin && (
                <div>
                    <Link to="/admin" className="btn btn-primary w-100">Masuk ke Dasbor Admin</Link>
                </div>
              )
            }
          </div>
        </section>
        )
      }
      <MainHeroCarousel/>
      <section className="section">
        <div className="section-inner">
          <h2 className="mt-5 text-start w-100 h3">Terbaru</h2>
          <div>
            {
              program.programList?.response?.data?.map((el,id)=>(
                <ProgramItem key={el.ID} data={{
                  id: el.ID,
                  title: el?.title,
                  raised: [5000,el?.amount],
                  deadline: "12 Juli 2020",
                  link: `/program/${el.ID}`
                }}/>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
