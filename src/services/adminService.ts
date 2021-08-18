import apiInstance from "@/config/api";

export function verifyFundraiserService( user_id: string ) {
  const mutator = ()=>{
    return apiInstance.put(`api/user/verify/${user_id}`);
  }

  return mutator();
}

export function getPendingFundraiserService() {
  const fetcher = ()=>{
    return apiInstance.get(`api/user/unverified`);
  }

  return fetcher();
}

export function verifyProgramService( program_id: string ) {
  const mutator = ()=>{
    return apiInstance.put(`api/donate/verify/${program_id}`);
  }

  return mutator();
}

export function getPendingProgramService() {
  const fetcher = ()=>{
    return apiInstance.get(`api/donate/unverified`);
  }

  return fetcher();
}

export function verifyWithdrawalService( withdrawal_id: string ) {
  const mutator = ()=>{
    return apiInstance.put(`api/withdraw/verify/${withdrawal_id}`);
  }

  return mutator();
}

export function getPendingWithdrawalService() {
  const fetcher = ()=>{
    return apiInstance.get(`api/withdraw/unverified`);
  }

  return fetcher();
}