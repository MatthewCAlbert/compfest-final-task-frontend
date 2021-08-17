import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <Layout position="center">
      <SEO title="404"/>
      <section className="section">
        <div className="section-inner text-center mb-5">
          <h1>404 Not Found</h1>
          <p>Sepertinya anda kehilangan jejak</p>
          <Link to="/" className="text-primary">Kembali ke Halaman Utama</Link>
        </div>
      </section>
    </Layout>
  )
}

export default Page404
