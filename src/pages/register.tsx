import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { clearAuthAction, registerUserAction } from '@/redux/actions/authActions'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Input from '@/components/form/Input'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { roles } from '@/config/enums'
import toast from 'react-hot-toast'
import { useSelector } from '@/hooks/useReduxSelector'
import LoadingScreen from '@/components/LoadingScreen'

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation<{from?: string}>();

  const dispatch = useDispatch();
  const auth = useSelector((state)=> state.auth);

  useEffect(()=>{
    if( auth?.error ){
      toast.error(auth.error?.message);
      dispatch(clearAuthAction());
    }
    if( auth?.response ){
      toast.success("Registrasi berhasil! Silahkan coba login.");
      dispatch(clearAuthAction());
    }
    setLoading(false);
  }, [auth])

  const handleRegister = (data)=>{
    const {username, name, email, newPassword, rePassword, role} = data;
    if( !String(newPassword).match(/.{8,}/) ) return toast.error("Password minimal 8 karakter");
    if( newPassword !== rePassword ) return toast.error("Password tidak sama");
    setLoading(true);
    dispatch(registerUserAction({
      email, username, name, role, password: newPassword
    }));
  }

  const {
    register,
    handleSubmit
  } = useForm();

  if( auth.response ) return <Redirect to="/login"/>;
  else if( auth.token ) return <Redirect to={state?.from || "/"}/>;

  return (
    <Layout>
      <SEO title="Daftar"/>
      <LoadingScreen show={loading}/>
      <section className="section">
        <div className="section-inner pt-4 mt-4">
          <form onSubmit={handleSubmit(handleRegister)}>
            <h1 className="h3 mb-4">Daftar Akun</h1>

            <Input type="email" label="Email" name="email" register={register("email", {required: true})} id="email"/>
            <Input type="text" label="Username" name="username" register={register("username", {required: true})} id="username"/>
            <Input type="text" label="Nama" name="name" register={register("name", {required: true})} id="name"/>
            <Input type="password" label="Password Baru" name="newPassword" register={register("newPassword", {required: true})} id="newPassword"/>
            <Input type="password" label="Konfirmasi Password Baru" name="rePassword" register={register("rePassword", {required: true})} id="rePassword"/>
            <Input type="select" label="Jenis Akun" name="role" register={register("role", {required: true})} id="role">
              <option value={roles.donor}>Donatur</option>
              <option value={roles.fundraiser}>Fundraiser</option>
            </Input>

            <button className="btn btn-primary w-100 mt-3">Daftar</button>
          </form>
          <p className="text-center mt-3">
            Sudah punya akun? <Link to="/login" className="text-primary fw-bold">Masuk</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default RegisterPage
