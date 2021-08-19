import React, { useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import ProgramItem from '@/components/ProgramItem'
import { useDispatch } from 'react-redux'
import { useSelector } from '@/hooks/useReduxSelector'
import { useEffect } from 'react'
import { searchDonationProgram } from '@/redux/actions/programActions'
import qs from 'query-string';
import { useHistory } from 'react-router-dom'

const SearchPage = () => {
  const history = useHistory();
  const [fetched, setFetched] = useState(false);
  const [searchInput, setSearchInput] = useState(qs.parse(history.location.search)?.q || "");

  const program = useSelector((state)=>state.program);
  const dispatch = useDispatch();

  useEffect(()=>{
    if( !fetched || !program?.search ){
      dispatch(searchDonationProgram(String(searchInput)))
      setFetched(true);
    }
    console.log(program?.search)
  },[program, fetched]);

  useEffect(()=>{
    const query = qs.parse(history.location.search)?.q;
    setSearchInput(query);
    setFetched(false);
  },[history.location.search])

  return (
    <Layout>
      <SEO title="Pencarian"/>
      <section className="section">
        <div className="section-inner">
          <h2 className="mt-3 text-start w-100 h3">Hasil Pencarian</h2>
          <div>
            {
              (!program?.search?.response || program?.search?.response?.data?.length < 1) && (
                <p>Tidak ada program yang ditemukan.</p>
              )
            }
            {
              program?.search?.response?.data?.map((el, index)=>(
                <ProgramItem key={el.ID || index} data={{
                  id: el.ID,
                  title: el?.title,
                  raised: [el?.colected, el?.amount],
                  deadline: el?.deadline,
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
