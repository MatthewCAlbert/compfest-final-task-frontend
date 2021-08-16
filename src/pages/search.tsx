import React from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import ProgramItem from '@/components/ProgramItem'

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Pencarian"/>
      <section className="section">
        <div className="section-inner">
          <h2 className="mt-3 text-start w-100 h3">HASIL PENCARIAN</h2>
          <div>
            <ProgramItem data={{
              id: "3312",
              title: "Ini program",
              raised: [5000,20000],
              deadline: "12 Juli 2020"
            }}/>
            <ProgramItem data={{
              id: "3312",
              title: "Ini program",
              raised: [5000,20000],
              deadline: "12 Juli 2020"
            }}/>
            <ProgramItem data={{
              id: "3312",
              title: "Ini program",
              raised: [5000,20000],
              deadline: "12 Juli 2020"
            }}/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SearchPage
