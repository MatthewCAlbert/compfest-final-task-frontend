import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { css } from '@emotion/react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as types from '@/redux/actions'
import { useForm } from 'react-hook-form'
import Input from '@/components/form/Input'
import toast from 'react-hot-toast'
import { theme } from '@/config/emotion'
import { useSelector } from '@/hooks/useReduxSelector'
import LoadingScreen from '@/components/LoadingScreen'
import { changePasswordAction, clearChangePasswordResponse } from '@/redux/actions/authActions'

const ChangePasswordPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  
  const handleSubmission = (data)=>{
    const {oldPassword, newPassword, rePassword} = data;
    if( !String(newPassword).match(/.{8,}/) ) return toast.error("Password minimal 8 karakter");
    if( newPassword !== rePassword ) return toast.error("Password tidak sama");
    setLoading(true);
    dispatch(changePasswordAction({
      oldPassword, newPassword
    }));
  }

  useEffect(()=>{
    if( auth?.changePassword?.response ){
      toast.success("Berhasil mengganti password!");
      setSubmitted(true);
    }
    if( auth?.changePassword?.error ){
      toast.error("Gagal mengganti password!");
    }
    dispatch(clearChangePasswordResponse());
    setLoading(false);
  },[auth?.changePassword])

  const {
    register,
    handleSubmit
  } = useForm();

  if( submitted ) return <Redirect to="/account" />

  return (
    <Layout>
      <SEO title="Ubah Password"/>
      <LoadingScreen show={loading}/>
      <section className="section">
        <div className="section-inner pt-4">
          <h1 className="h3 fw-bold mb-4">Ubah Password</h1>
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
