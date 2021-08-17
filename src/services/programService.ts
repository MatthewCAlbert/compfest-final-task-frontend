import apiInstance from "@/config/api";

export function getDonationProgramListService() {
  const fetcher = ()=>{
    return apiInstance.get("api/donate");
  }

  return fetcher();
}

export function getDonationProgramDetailService(program_id: string) {
  const fetcher = ()=>{
    return apiInstance.get(`api/donate/${program_id}`);
  }

  return fetcher();
}

export function getDonationProgramHistoryService() {
  const fetcher = ()=>{
    return apiInstance.get(`api/donate/history`);
  }

  return fetcher();
}

export interface DonateProgramRequest{
  title: string,
  detail: string,
  amount: number
}

export function donateProgramService( request: DonateProgramRequest ) {
  const mutator = ()=>{
    return apiInstance.post(`api/donate`, request);
  }

  return mutator();
}

export interface CreateDonationProgramRequest{

}

export function createDonationProgramService( request: CreateDonationProgramRequest ) {
  const mutator = ()=>{
    return apiInstance.post(`api/donate`, request);
  }

  return mutator();
}