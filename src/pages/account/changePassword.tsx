import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as types from '@/redux/actions'
import { useForm } from 'react-hook-form'
import Input from '@/components/form/Input'
import toast from 'react-hot-toast'

const ChangePasswordPage = () => {
  const dispatch = useDispatch();
  
  const handleSubmission = (data)=>{
    const {oldPassword, newPassword, rePassword} = data;
    if( !String(newPassword).match(/.{8,}/) ) return toast.error("Password minimal 8 karakter");
    if( newPassword !== rePassword ) return toast.error("Password tidak sama");
  }

  const {
    register,
    handleSubmit
  } = useForm();

  return (
    <Layout>
      <SEO title="Ubah Password"/>
      <section className="section">
        <div className="section-inner pt-4">
          <div className="d-flex flex-column align-items-center">
            <div css={css`
              width: 200px;
              height: 200px;
              border-radius: 200px;
              background-color: grey;
            `}>

            </div>
            <div className="mt-3 text-center">
              <span className="d-block h3 mb-1">Budi Wijaya</span>
              <span className="d-block h5">Role</span>
            </div>
          </div>
          <div>
          <form onSubmit={handleSubmit(handleSubmission)} className="mt-4">
            <Input type="password" label="Password Lama" name="oldPassword" register={register("oldPassword", {required: true})} id="password"/>
            <Input type="password" label="Password Baru" name="newPassword" register={register("newPassword", {required: true})} id="newPassword"/>
            <Input type="password" label="Konfirmasi Password Baru" name="rePassword" register={register("rePassword", {required: true})} id="rePassword"/>
            <button className="btn btn-primary w-100 mt-3">Ubah Password</button>
          </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ChangePasswordPage
