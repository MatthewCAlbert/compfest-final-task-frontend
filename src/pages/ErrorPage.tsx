import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link } from 'react-router-dom'
import Header from '@/components/layouts/Header'

const ErrorPage: React.FC<{
  title?: string,
  message?: string,
  code?: number,
  useBack?: boolean
}> = ({ title = "404", code = 404, message= "Sepertinya anda kehilangan jejak", useBack = false }) => {
  return (
    <Layout position="center" enableHeader={!useBack}>
      {
        useBack && <Header simpleBack={true}/>
      }
      <SEO title={title}/>
      <section className="section">
        <div className="section-inner text-center mb-5">
          <h1>{code} Not Found</h1>
          <p>{message}</p>
          <Link to="/" className="text-primary">Kembali ke Halaman Utama</Link>
        </div>
      </section>
    </Layout>
  )
}

export default ErrorPage
