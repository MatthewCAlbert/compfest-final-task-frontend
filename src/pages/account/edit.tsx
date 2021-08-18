import React, { useEffect } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as types from '@/redux/actions'
import { useForm } from 'react-hook-form'
import Input from '@/components/form/Input'
import toast from 'react-hot-toast'
import { useSelector } from '@/hooks/useReduxSelector'

const EditProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.auth?.user);

  const handleSubmission = (data)=>{
    const {name} = data;
  }

  const {
    register,
    handleSubmit,
    setValue
  } = useForm();

  useEffect(()=>{
    setValue("name", user?.name);
  },[user])

  return (
    <Layout>
      <SEO title="Edit Profil"/>
      <section className="section">
        <div className="section-inner pt-4">
          <h1 className="h3 fw-bold">Edit Profil</h1>
          <form onSubmit={handleSubmit(handleSubmission)} className="mt-4">
            <Input type="text" label="Nama" name="name" register={register("name", {required: true})} id="name"/>
            <button className="btn btn-primary w-100 mt-3">Simpan Perubahan</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default EditProfilePage
