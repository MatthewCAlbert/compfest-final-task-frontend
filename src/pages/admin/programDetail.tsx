import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link, useParams } from 'react-router-dom'
import BottomNavTemplate from '@/components/layouts/BottomNavTemplate'
import { css } from '@emotion/react'
import Header from '@/components/layouts/Header'
import { useSelector } from '@/hooks/useReduxSelector'
import ProgramDetailTemplate from '@/components/ProgramDetailTemplate'
import { theme } from '@/config/emotion'

const AdminProgramDetailPage = () => {
  const {id} = useParams<{id: string}>();
  const auth = useSelector((state)=> state.auth);

  const handleApproval = (x: boolean)=>{

  }

  return (
    <Layout enableHeader={false} enableNav={false}>
      <SEO title="Admin Program Approval"/>
      <Header simpleBack={true} customTitle="Ini Judul"/>
      <section className="section">
        <div className="section-inner pt-4">
        
          <ProgramDetailTemplate data={{
            id: "32",
            donator: 20,
            name: "John Doe",
            title: "Bantu Saya Beli PS5",
            amount: [0,20000],
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem et ea, est in delectus, earum tempore ullam expedita voluptatum distinctio! Recusandae corrupti fuga aliquid libero! Veritatis ab amet excepturi."
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
