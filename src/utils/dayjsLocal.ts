import dayjs from "dayjs";

dayjs.locale('id',{
  months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
  weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
})

const dayjsLocal = (x?: string | number | Date | dayjs.Dayjs)=>dayjs(x);

export default dayjsLocal;