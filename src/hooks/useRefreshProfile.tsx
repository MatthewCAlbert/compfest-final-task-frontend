import { roles } from '@/config/enums';
import { getUserProfileAction } from '@/redux/actions/authActions';
import { getUserWalletInfo } from '@/redux/actions/userActions';
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from './useReduxSelector';

const useRefreshProfile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state)=> state.auth);
  const profile = useSelector((state)=> state.profile);
  
  useEffect(()=>{
    if( !auth?.user && auth?.token ){
      dispatch(getUserProfileAction());
    }
    if( !profile.wallet?.error && !profile.wallet?.response && profile.wallet?.response !== 0 && auth?.user?.role !== roles.admin ){
      dispatch(getUserWalletInfo())
    }
  },[auth, profile])

  return [auth?.user, auth?.error];
}

export default useRefreshProfile
