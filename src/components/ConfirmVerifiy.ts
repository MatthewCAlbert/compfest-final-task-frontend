import Swal from "sweetalert2"

export function confirmVerify( data :{
  id?: string,
  title?: string,
  content?: string,
  onCancel?: {()},
  onConfirm?: {(x: any)},
}){
  Swal.fire({
    title: 'Lanjutkan verifikasi?',
    text: data?.content || "Proses akan dilanjutkan.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Lanjutkan',
    cancelButtonText: 'Batalkan'
  }).then((result) => {
    if (result.isConfirmed) {
      if(data.onConfirm) data.onConfirm(data.id);
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      if(data.onCancel) data.onCancel();
    }
  })
}
