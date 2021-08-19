import Input from '@/components/form/Input';
import Layout from '@/components/layouts/Layout';
import SEO from '@/components/layouts/SEO';
import LoadingScreen from '@/components/LoadingScreen';
import { useSelector } from '@/hooks/useReduxSelector';
import { clearCreateDonationProgramResponse, createDonationProgram } from '@/redux/actions/fundraiserActions';
import dayjsLocal from '@/utils/dayjsLocal';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AddFundraisingProgramPage = () => {
  const fundraiser = useSelector((state)=>state.fundraiser);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleCreate = (data)=>{
    const {title, content, amount, deadline} = data;
    if( !dayjsLocal(deadline).isAfter(new Date()) ) return toast.error("Mohon masukan deadline setelah hari ini.");
    setLoading(true);
    dispatch(createDonationProgram({
      title, detail: content, amount: parseInt(amount), deadline
    }));
  }

  useEffect(()=>{
    if( fundraiser?.create?.response ){
      toast.success("Berhasil membuat permintaan program baru!");
      setSubmitted(true);
    }
    if( fundraiser?.create?.error ){
      toast.error("Gagal membuat permintaan program baru!");
    }
    dispatch(clearCreateDonationProgramResponse());
    setLoading(false);
  },[fundraiser?.create])

  const {
    register,
    handleSubmit
  } = useForm();

  if( submitted ) return <Redirect to="/fundraiser/program" />

  return (
    <Layout>
      <SEO title="Tambahkan Program Baru"/>
      <LoadingScreen show={loading}/>
      <section className="section">
        <div className="section-inner pt-4">
          <h1 className="h3 mb-3">Buat Program Baru</h1>
          <form onSubmit={handleSubmit(handleCreate)}>
            <Input type="text" label="Judul" name="title" register={register("title", {required: true})} id="program-title"/>
            <Input type="number" label="Target Dana" name="amount" register={register("amount", {required: true})} id="amount"/>
            <Input type="date" label="Deadline" name="deadline" register={register("deadline", {required: true})} id="deadline"/>
            <Input type="textarea" label="Konten" name="content" register={register("content", {required: true})} id="program-content" rows={10}/>

            <button className="btn btn-primary w-100 mt-3">Submit</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default AddFundraisingProgramPage;
