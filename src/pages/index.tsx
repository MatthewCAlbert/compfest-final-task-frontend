import MainHeroCarousel from '@/components/landing/MainHeroCarousel'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import ProgramItem from '@/components/ProgramItem'
import React from 'react'

const IndexPage = () => {
  return (
    <Layout>
      <SEO useSuffix={false}/>
      <MainHeroCarousel/>
      <section className="section">
        <div className="section-inner">
          <h2 className="mt-5 text-start w-100 h3">TERBARU</h2>
          <div>
            <ProgramItem data={{
              id: "3312",
              title: "Ini program",
              raised: [5000,20000],
              deadline: "12 Juli 2020",
              link: "/program/1111"
            }}/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
