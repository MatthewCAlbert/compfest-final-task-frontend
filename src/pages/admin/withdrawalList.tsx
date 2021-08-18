import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link } from 'react-router-dom'

const AdminWithdrawalListPage = () => {
  return (
    <Layout>
      <SEO title="Admin Withdrawal List"/>
      <section className="section">
        <div className="section-inner pt-4 d-flex flex-column">
          <h1 className="h3 mb-3">Daftar Penarikan</h1>
        </div>
      </section>
    </Layout>
  )
}

export default AdminWithdrawalListPage
