import React, { useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link, useParams } from 'react-router-dom'
import BottomNavTemplate from '@/components/layouts/BottomNavTemplate'
import { css } from '@emotion/react'
import Header from '@/components/layouts/Header'
import { useSelector } from '@/hooks/useReduxSelector'
import ProgramDetailTemplate from '@/components/ProgramDetailTemplate'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { clearDonationProgramDetail, getDonationProgramDetail } from '@/redux/actions/programActions'
import LoadingScreen from '@/components/LoadingScreen'
import { clearVerifyProgramResponse, verifyProgram } from '@/redux/actions/adminActions'
import toast from 'react-hot-toast'
import ErrorPage from '../ErrorPage'

const AdminProgramDetailPage = () => {
  const {id} = useParams<{id: string}>();
  const program = useSelector((state)=> state.program);
  const admin = useSelector((state)=> state.admin);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [programDetail, setProgramDetail] = useState(undefined);

  const dispatch = useDispatch();

  useEffect(()=>{
    if( id ){
      dispatch(clearDonationProgramDetail());
      dispatch(getDonationProgramDetail(id));
      setFetched(true);
    }
  }, [id])

  useEffect(()=>{
    if( program?.programDetail?.response?.data && fetched ){
      setProgramDetail(program?.programDetail?.response?.data);
    }else if( program?.programDetail?.error && fetched ){
      console.log("not found")
    }
  }, [program, id])

  const handleApproval = (x: boolean)=>{
    if( !x ) return toast.error("Tidak ada perubahan.");
    setLoading(true);
    dispatch(verifyProgram(id));
  }

  useEffect(()=>{
    if( admin?.verifyProgram?.response ){
      toast.success("Berhasil memverifikasi program!");
    }
    if( admin?.verifyProgram?.error ){
      toast.error("Gagal memverifikasi program!");
    }
    setLoading(false);
    dispatch(clearVerifyProgramResponse());
  }, [admin.verifyProgram])

  if(program?.programDetail?.error && fetched){
    return (
      <ErrorPage message="Program Donasi Tidak Dapat Ditemukan" useBack={true}/>
    )
  }

  return (
    <Layout enableHeader={false} enableNav={false}>
      <SEO title="Admin Program Approval"/>
      <LoadingScreen show={ loading || !programDetail}/>
      <Header simpleBack={true} customTitle="Ini Judul"/>
      <section className="section">
        <div className="section-inner pt-4">
        
          <ProgramDetailTemplate data={{
            id: "32",
            donator: programDetail?.amount,
            name: programDetail?.user?.name,
            title: programDetail?.title,
            amount: [0,programDetail?.amount],
            content: programDetail?.detail,
            deadline: programDetail?.deadline
          }} adminMode={true}/>

        </div>
      </section>
      
      <BottomNavTemplate background="white">
        <div className="nav-inner" css={css`
          button{
            border-radius: 20px;
            padding: 10px 20px;
            width: 150px;
            font-weight: 600;
            font-size: .9em;
          }
        `}>
          <button className="btn btn-primary" onClick={()=>handleApproval(false)}>Tolak</button>
          &nbsp;
          <button className="btn btn-primary" onClick={()=>handleApproval(true)}>Terima</button>
        </div>
      </BottomNavTemplate>
    </Layout>
  )
}

export default AdminProgramDetailPage
