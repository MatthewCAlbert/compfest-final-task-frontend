import React, { useState } from 'react'
import Layout from '@/components/layouts/Layout'
import SEO from '@/components/layouts/SEO'
import { Link } from 'react-router-dom'
import { useSelector } from '@/hooks/useReduxSelector'
import { useDispatch } from 'react-redux'
import { clearVerifyWithdrawalResponse, getPendingWithdrawal, verifyWithdrawal } from '@/redux/actions/adminActions'
import { useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import clsx from 'clsx'
import { status, statusEnum } from '@/config/enums'
import { css } from '@emotion/react'
import toast from 'react-hot-toast'
import { formatDateString, formatNumber } from '@/utils/utils'
import { confirmVerify } from '@/components/ConfirmVerifiy'
import Skeleton from '@/components/Skeleton'
import { theme } from '@/config/emotion'

const WithdrawalRequestItem = ({data, setLoading}: {
  data: {
    id: string,
    status: statusEnum
    amount: number,
    owner: string,
    date: string,
    programId: string,
  },
  setLoading: {(x: boolean)}
})=>{
  const admin = useSelector((state)=>state.admin);
  const dispatch = useDispatch();

  const askVerify = ()=>{
    confirmVerify({
      id: data.id,
      content: `Lanjutkan mencairkan dana sebesar Rp. ${formatNumber(data.amount)} kepada ${data.owner || "undefined"}?`,
      onConfirm: handleVerify
    });
  }

  const handleVerify = (id: string)=>{
    setLoading(true);
    dispatch(verifyWithdrawal(data.id));
  }

  useEffect(()=>{
    if( admin?.verifyWithdrawal?.response ){
      toast.success("Berhasil mengijinkan penarikan dana!");
      dispatch(getPendingWithdrawal());
    }
    if( admin?.verifyWithdrawal?.error ){
      toast.error("Gagal mengijinkan penarikan dana!");
    }
    dispatch(clearVerifyWithdrawalResponse());
    setLoading(false);
  },[admin?.verifyWithdrawal])

  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background-color: ${theme.lightblue};
      padding: 15px;
      font-size: .9em;
    `} className="mb-2">
      <div className="d-flex justify-content-between">
        <div>
          <div>Pemohon: <strong>{data.owner || "undefined"}</strong></div>
          <div>Jumlah: <strong>Rp. {formatNumber(data.amount)}</strong></div>
          <div>
            <Link to={`/program/${data.programId}`} target="_blank" className="text-primary"><small>Lihat Program</small></Link>
          </div>
        </div>
        <div>
          <button className="btn btn-success" onClick={askVerify}><i className="fas fa-check"></i></button>
        </div>
      </div>
      <hr className="my-1" />
      <div className="d-flex justify-content-between">
        <div>
          <small>{ formatDateString(data.date, "DD MMMM YYYY") }</small>
        </div>
        <span className={clsx("badge", data.status === status.verified ? "bg-success" : data.status === status.unverified ? "bg-danger" : "bg-warning")}>
          {data.status === status.verified ? "Disetujui" : data.status === status.unverified ? "Ditolak" : "Menunggu Approval"}
        </span>
      </div>
    </div>
  )
}

const AdminWithdrawalListPage = () => {
  const admin = useSelector((state)=>state.admin);
  const dispatch = useDispatch();

  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if( !fetched || !admin?.pendingWithdrawal ){
      dispatch(getPendingWithdrawal())
      setFetched(true);
    }
    console.log(admin?.pendingWithdrawal)
  },[admin]);

  return (
    <Layout>
      <SEO title="Admin Withdrawal List"/>
      <LoadingScreen show={loading}/>
      <section className="section">
        <div className="section-inner pt-4 d-flex flex-column">
          <h1 className="h3 mb-3">Daftar Penarikan</h1>
            {
              !admin?.pendingWithdrawal?.response && <Skeleton/>
            }
            {
              admin?.pendingWithdrawal?.response?.data?.length < 1 && (
                <p>Tidak ada penggalang dana yang belum diverifikasi.</p>
              )
            }
            {
              admin?.pendingWithdrawal?.response?.data?.map((el)=>(
                <WithdrawalRequestItem key={el.ID} setLoading={setLoading} data={{
                  id: el.ID,
                  amount: el?.amount,
                  status: el?.status,
                  programId: el?.donation_program_id,
                  date: el?.CreatedAt,
                  owner: el?.user?.name,
                }}/>
              ))
            }
        </div>
      </section>
    </Layout>
  )
}

export default AdminWithdrawalListPage
