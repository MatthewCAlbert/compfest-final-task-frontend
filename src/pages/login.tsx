import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { loginUserAction } from '@/redux/actions/authActions'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Input from '@/components/form/Input'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { useSelector } from '@/hooks/useReduxSelector'

const LoginPage = () => {
  const { state } = useLocation<{from?: string}>();

  const dispatch = useDispatch();
  const auth = useSelector((state)=> state.auth);
  if( auth.token ) return <Redirect to={state?.from || "/"}/>;

  console.log(auth)

  const handleLogin = (data)=>{
    const {username, password} = data;
    dispatch(loginUserAction(username, password));
  }

  const {
    register,
    handleSubmit
  } = useForm();

  return (
    <Layout>
      <SEO title="Masuk"/>
      <section className="section justify-content-center">
        <div className="section-inner pt-4 mt-5">
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1 className="h3 mb-4">Masuk ke Akun Saya</h1>
            <Input type="text" label="Username" name="username" register={register("username", {required: true})} id="username"/>
            <Input type="password" label="Password" name="password" register={register("password", {required: true})} id="password"/>
            <button className="btn btn-primary w-100 mt-3">Masuk</button>
          </form>
          <p className="text-center mt-3">
            Belum punya akun? <Link to="/register" className="text-primary">Daftar Sekarang</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default LoginPage
