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
          <h2 className="mt-3 text-start w-100 h3">Hasil Pencarian</h2>
          <div>
            {
              [1,2,3,4].map((el, index)=>(
                <ProgramItem key={index} data={{
                  id: String(el),
                  title: "Ini program",
                  raised: [5000,20000],
                  deadline: "12 Juli 2020",
                  link: `/program/${el}`
                }}/>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SearchPage
