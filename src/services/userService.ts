import apiInstance from "@/config/api";

export function getUserDonationHistoryService() {
  const fetcher = ()=>{
    return apiInstance.get("api/user/donate/history");
  }

  return fetcher();
}

export function getUserWalletInfoService() {
  const fetcher = ()=>{
    return apiInstance.get("api/wallet");
  }

  return fetcher();
}