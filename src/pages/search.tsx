import React, { useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import ProgramItem from '@/components/ProgramItem'
import { useDispatch } from 'react-redux'
import { useSelector } from '@/hooks/useReduxSelector'
import { useEffect } from 'react'
import { clearSearchDonationProgram, searchDonationProgram } from '@/redux/actions/programActions'
import qs from 'query-string';
import { useHistory } from 'react-router-dom'
import ContentLoader from 'react-content-loader'

const SearchPage = () => {
  const history = useHistory();
  const [fetched, setFetched] = useState(false);
  const [searchInput, setSearchInput] = useState(qs.parse(history.location.search)?.q || "");

  const program = useSelector((state)=>state.program);
  const dispatch = useDispatch();

  useEffect(()=>{
    if( !fetched ){
      dispatch(clearSearchDonationProgram())
    }
    if( !program?.search ){
      dispatch(searchDonationProgram(String(searchInput || "")))
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
      <SEO title={`Pencarian ${ searchInput ? `"${searchInput}"` : "" }`}/>
      <section className="section">
        <div className="section-inner">
          <h2 className="mt-3 text-start w-100 h3">Hasil Pencarian {`"${searchInput || " "}"`}</h2>
          <div>
            {
              !program?.search?.response ? 
                <>
                <ContentLoader viewBox="0 0 420 100">
                  <rect x="50" y="17" rx="4" ry="4" width="500" height="15" />
                  <rect x="0" y="45" rx="3" ry="3" width="500" height="13" />
                  <rect x="0" y="62" rx="3" ry="3" width="500" height="13" />
                  <rect x="0" y="79" rx="3" ry="3" width="500" height="13" />
                </ContentLoader>
                <ContentLoader viewBox="0 0 420 100">
                  <rect x="50" y="17" rx="4" ry="4" width="500" height="15" />
                  <rect x="0" y="40" rx="3" ry="3" width="500" height="13" />
                  <rect x="0" y="57" rx="3" ry="3" width="500" height="13" />
                  <rect x="0" y="74" rx="3" ry="3" width="500" height="13" />
                </ContentLoader>
                </>
                :
                program?.search?.response?.data?.length < 1 && (
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
