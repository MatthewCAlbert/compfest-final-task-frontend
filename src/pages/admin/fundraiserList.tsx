import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import clsx from 'clsx'
import { css } from '@emotion/react'
import { status, statusEnum } from '@/config/enums'
import { useSelector } from '@/hooks/useReduxSelector'
import { useDispatch } from 'react-redux'
import { clearVerifyFundraiserResponse, getPendingFundraiser, verifyFundraiser } from '@/redux/actions/adminActions'
import toast from 'react-hot-toast'
import { confirmVerify } from '@/components/ConfirmVerifiy'
import LoadingScreen from '@/components/LoadingScreen'
import { formatDateString } from '@/utils/utils'
import Skeleton from '@/components/Skeleton'
import { theme } from '@/config/emotion'

const FundraiserItem = ({data, setLoading}: {
  data: {
    id: string,
    status: statusEnum,
    email: string,
    date: string,
    name: string
  },
  setLoading: {(x: boolean)}
})=>{
  const admin = useSelector((state)=>state.admin);
  const dispatch = useDispatch();

  const askVerify = ()=>{
    confirmVerify({
      id: data.id,
      content: `Lanjutkan memverifikasi fundraiser: ${data.name}?`,
      onConfirm: handleVerify
    });
  }

  const handleVerify = (id: string)=>{
    setLoading(true);
    dispatch(verifyFundraiser(data.id));
  }

  useEffect(()=>{
    if( admin?.verifyFundraiser?.response ){
      toast.success("Berhasil memverifikasi fundraiser!");
      dispatch(getPendingFundraiser());
    }
    if( admin?.verifyFundraiser?.error ){
      toast.error("Gagal memverifikasi fundraiser!");
    }
    dispatch(clearVerifyFundraiserResponse());
    setLoading(false);
  },[admin?.verifyFundraiser])

  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background-color: ${theme.lightblue};
      padding: 15px;
    `} className="mb-2">
      <div className="d-flex justify-content-between">
        <div>
          <div>Nama: <strong>{data.name || "undefined"}</strong></div>
          <div>Email: <strong>{data.email}</strong></div>
        </div>
        <div>
          <button className="btn btn-success" onClick={askVerify}><i className="fas fa-check"></i></button>
        </div>
      </div>
      <hr className="my-1" />
      <div className="d-flex justify-content-between">
        <div>
          <small>{ formatDateString(data.date, "DD MMMM YYYY | HH:mm") }</small>
        </div>
        <span className={clsx("badge", data.status === status.verified ? "bg-success" : data.status === status.unverified ? "bg-danger" : "bg-warning")}>
          {data.status === status.verified ? "Disetujui" : data.status === status.unverified ? "Ditolak" : "Menunggu Verifikasi"}
        </span>
      </div>
    </div>
  )
}

const AdminFundraiserListPage = () => {
  const admin = useSelector((state)=>state.admin);
  const dispatch = useDispatch();

  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if( !fetched || !admin?.pendingFundraiser ){
      dispatch(getPendingFundraiser())
      setFetched(true);
    }
    console.log(admin?.pendingFundraiser)
  },[admin]);

  return (
    <Layout>
      <SEO title="Admin Fundraiser List"/>
      <LoadingScreen show={loading}/>
      <section className="section">
        <div className="section-inner pt-4 d-flex flex-column">
          <h1 className="h3 mb-3">Daftar Fundraiser</h1>
          <div>
            {
              !admin?.pendingFundraiser?.response && <Skeleton/>
            }
            {
              admin?.pendingFundraiser?.response?.data?.length < 1 && (
                <p>Tidak ada penggalang dana yang belum diverifikasi.</p>
              )
            }
            {
              admin?.pendingFundraiser?.response?.data?.map((el)=>(
                <FundraiserItem key={el.ID} setLoading={setLoading} data={{
                  id: el.ID,
                  name: el?.name,
                  email: el?.email,
                  date: el?.CreatedAt,
                  status: el?.status,
                }}/>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AdminFundraiserListPage
