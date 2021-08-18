import Input from '@/components/form/Input';
import Layout from '@/components/layouts/Layout';
import SEO from '@/components/layouts/SEO';
import React from 'react'
import { useForm } from 'react-hook-form';

const AddFundraisingProgramPage = () => {
  
  const handleAdd = (data)=>{
    const {title, content} = data;
  }

  const {
    register,
    handleSubmit
  } = useForm();

  return (
    <Layout>
      <SEO title="Tambahkan Program Baru"/>
      <section className="section">
        <div className="section-inner pt-4">
          <h1 className="h3 mb-3">Buat Program Baru</h1>
          <form onSubmit={handleSubmit(handleAdd)}>
            <Input type="text" label="Judul" name="title" register={register("title", {required: true})} id="program-title"/>
            <Input type="textarea" label="Konten" name="content" register={register("content", {required: true})} id="program-content" rows={10}/>

            <button className="btn btn-primary w-100 mt-3">Submit</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default AddFundraisingProgramPage;
