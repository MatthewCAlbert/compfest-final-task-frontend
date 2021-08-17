import apiInstance from "@/config/api";

export function verifyFundraiserService( user_id: string ) {
  const mutator = ()=>{
    return apiInstance.put(`api/user/verify/${user_id}`);
  }

  return mutator();
}

export function verifyProgramService( program_id: string ) {
  const mutator = ()=>{
    return apiInstance.put(`api/donate/verify/${program_id}`);
  }

  return mutator();
}