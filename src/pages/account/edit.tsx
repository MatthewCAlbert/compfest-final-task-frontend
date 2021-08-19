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
import { theme } from '@/config/emotion'
import { capitalizeFirstLetter } from '@/utils/utils'

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
          <h1 className="h3 fw-bold mb-4">Edit Profil</h1>
          
          <div className="d-flex flex-column align-items-center">
            <div css={css`
              width: 200px;
              height: 200px;
              border-radius: 200px;
              background-color: ${theme.darkblue};
            `}>

            </div>
            <div className="mt-3 text-center">
              <span className="d-block h3 mb-1">{user?.name}</span>
              <span className="d-block h5">{capitalizeFirstLetter(user?.role)}</span>
            </div>
          </div>

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
