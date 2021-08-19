import { getUserProfileAction } from '@/redux/actions/authActions';
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from './useReduxSelector';

const useRefreshProfile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state)=> state.auth);
  
  useEffect(()=>{
    if( !auth?.user && auth?.token ){
      dispatch(getUserProfileAction());
    }
  },[auth])

  return [auth?.user, auth?.error];
}

export default useRefreshProfile
