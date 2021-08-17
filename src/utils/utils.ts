import dayjs, { Dayjs } from "dayjs";

export function reduceString(str: string, maxLength = 100){
  return (
    str.length > maxLength ? str.substr(0,maxLength)+".." : str
  )
}

export function roundToPrecision(num: number, precision = 2){
  return Math.round((num + Number.EPSILON) * (10**precision)) / (10**precision)
}

export const formatDateString = (date: string | Dayjs | Date, format = "YYYY-MM-DD") => {
  if (!date) return "-";
  const parsed = dayjs(date);
  return parsed.format(format);
}

export function formatNumber(x: number){
  if( isNaN(x) ) return 0;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
