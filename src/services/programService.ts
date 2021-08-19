import apiInstance from "@/config/api";

export function searchDonationProgramService(query: string) {
  const fetcher = ()=>{
    return apiInstance.get(`api/donate/search?keyword=${encodeURI(query)}`);
  }

  return fetcher();
}

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

export function donateProgramService( program_id: string, amount: number ) {
  const mutator = ()=>{
    return apiInstance.post(`api/donate/${program_id}`, {amount});
  }

  return mutator();
}

export interface CreateDonationProgramRequest{
  title: string,
  detail: string,
  deadline: string,
  amount: number
}

export function createDonationProgramService( request: CreateDonationProgramRequest ) {
  const mutator = ()=>{
    return apiInstance.post(`api/donate`, request);
  }

  return mutator();
}