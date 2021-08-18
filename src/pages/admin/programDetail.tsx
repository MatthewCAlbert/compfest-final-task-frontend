import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link, useParams } from 'react-router-dom'
import BottomNavTemplate from '@/components/layouts/BottomNavTemplate'
import { css } from '@emotion/react'
import Header from '@/components/layouts/Header'
import { useSelector } from '@/hooks/useReduxSelector'

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
          <div css={css`
            border-radius: 20px;
            overflow: hidden;
          `} className="shadow">
            <div css={css`
              background-color: grey;
              width: 100%;
              height: 150px;
              position: relative;
              & > div{
                position: absolute;
                bottom: 20px;
                left: 25px;
                color: white;
              }
            `}>
              <div className="d-flex align-items-center">
                <div css={css`
                  width: 45px;
                  height: 45px;
                  border-radius: 45px;
                  background-color: lightgray;
                `}></div>
                <div className="ms-3">
                  <span className="d-block"><small>Diajukan oleh</small></span>
                  <span className="d-block h6 mb-0">John Doe</span>
                </div>
              </div>
            </div>
            <div className="px-3 py-4" css={css`
              font-size: .9em;
            `}>
              <h1 className="h4 fw-bold">Judul Galang Dana {id}</h1>
              
              <div className="d-flex justify-content-between w-100">
                <div className="d-flex flex-column">
                  <span>Rp 20.000</span>
                  <span>Target</span>
                </div>
              </div>

            </div>
            <div css={css`
              border-radius: 20px;
              background-color: lightgrey;
              padding: 20px;
              font-size: .9em;
            `}>
                <h2 className="h5 fw-bold">Mari Bantu X</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero purus, tristique id lacus eu, mattis suscipit quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin quis ullamcorper velit. </p>
            </div>
          </div>
        </div>
      </section>
      
      <BottomNavTemplate background="lightgrey">
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
