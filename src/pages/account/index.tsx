import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAction } from '@/redux/actions/authActions'
import { useSelector } from '@/hooks/useReduxSelector'
import { theme } from '@/config/emotion'
import { capitalizeFirstLetter } from '@/utils/utils'
import { roles } from '@/config/enums'
import clsx from 'clsx'

const AccountPage = () => {
  const dispatch = useDispatch();

  const user = useSelector((state)=> state.auth?.user);
  
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
              background-color: ${theme.darkblue};
            `}>

            </div>
            <div className="ms-3">
              <span className="d-block h4 mb-0">{user?.name}</span>
              <div className="d-flex">
                <span className={clsx("d-block h6 mb-0 badge", user?.status === "verified" ? "bg-success" : "bg-warning")}>{capitalizeFirstLetter(user?.status)}</span>
              </div>
              <span className="d-block h6">{capitalizeFirstLetter(user?.role)}</span>
            </div>
          </div>
          <div className="d-flex flex-column mt-5" css={css`
            a{
              margin-bottom: 10px;
              padding: 10px;
              border-radius: 5px;
              background-color: ${theme.blue};
              color: white;
              transition: .2s;
              &:hover{
                box-shadow: 0px 5px 10px rgba(0,0,0,.1);
              }
            }
          `}>
            <Link to="/account/edit">Edit Profil</Link>
            <Link to="/account/change-password">Ganti Password</Link>
            {
              user?.role === roles.fundraiser && (
                <Link to="/fundraiser/program/">Penggalangan Dana Saya</Link>
              )
            }
            {
              user?.role === roles.donor && (
                <Link to="/donation/history">Donasi Saya</Link>
              )
            }
            <a className="cursor-pointer" onClick={handleLogout}>Keluar</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AccountPage
