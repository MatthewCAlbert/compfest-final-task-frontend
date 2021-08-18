import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link } from 'react-router-dom'

const AdminPage = () => {
  return (
    <Layout>
      <SEO title="Admin"/>
      <section className="section">
        <div className="section-inner pt-4 d-flex flex-column">
          <h1 className="h3 mb-3">Dasbor Admin</h1>
          <Link to="/admin/program" className="btn btn-primary mb-2">Daftar Program</Link>
          <Link to="/admin/fundraiser" className="btn btn-primary mb-2">Daftar Fundraiser</Link>
          <Link to="/admin/withdrawal" className="btn btn-primary mb-2">Daftar Penarikan</Link>
        </div>
      </section>
    </Layout>
  )
}

export default AdminPage
