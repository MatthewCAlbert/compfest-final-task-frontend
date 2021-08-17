import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { css } from '@emotion/react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAction } from '@/redux/actions/authActions'
import { useSelector } from '@/hooks/useReduxSelector'

const AccountPage = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state)=> state.auth);
  if( !auth.token ) return <Redirect to="/login"/>;
  
  const handleLogout = ()=>{
    dispatch(logoutAction());
  }

  return (
    <Layout>
      <SEO title="Akun"/>
      <section className="section">
        <div className="section-inner pt-4">
          <div className="d-flex align-items-center">
            <div css={css`
              width: 80px;
              height: 80px;
              border-radius: 80px;
              background-color: grey;
            `}>

            </div>
            <div className="ms-3">
              <span className="d-block h4 mb-0">Budi Wijaya</span>
              <span className="d-block h6">Role</span>
            </div>
          </div>
          <div className="d-flex flex-column mt-5" css={css`
            a{
              margin-bottom: 10px;
              padding: 10px;
              border-radius: 5px;
              background-color: aqua;
              transition: .2s;
              &:hover{
                box-shadow: 0px 5px 10px rgba(0,0,0,.1);
              }
            }
          `}>
            <Link to="/account/edit">Edit Profil</Link>
            <Link to="/account/change-password">Ganti Password</Link>
            <Link to="/donation/history">Donasi Saya</Link>
            <Link to="/program/">Penggalangan Dana Saya</Link>
            <a className="cursor-pointer" onClick={handleLogout}>Keluar</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AccountPage
