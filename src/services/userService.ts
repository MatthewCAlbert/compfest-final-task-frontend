import apiInstance from "@/config/api";

export function getUserProfileService() {
  const fetcher = ()=>{
    return apiInstance.get("api/user");
  }

  return fetcher();
}

export function getUserDonationHistoryService() {
  const fetcher = ()=>{
    return apiInstance.get("api/donation/history");
  }

  return fetcher();
}

export function getUserWalletInfoService() {
  const fetcher = ()=>{
    return apiInstance.get("api/wallet");
  }

  return fetcher();
}

export function getUserWalletHistoryService() {
  const fetcher = ()=>{
    return apiInstance.get("api/wallet/history");
  }

  return fetcher();
}

export function topUpService( amount: number ) {
  const mutator = ()=>{
    return apiInstance.post(`api/wallet`, { amount });
  }

  return mutator();
}

export function requestProgramWithdrawalService( program_id: string, amount: number ) {
  const mutator = ()=>{
    return apiInstance.post(`api/withdraw/${program_id}`, {
      amount
    });
  }

  return mutator();
}

export function getAllFundraiserProgramService() {
  const fetcher = ()=>{
    return apiInstance.get(`api/donate/program`);
  }

  return fetcher();
}