import Swal from 'sweetalert2'

export const alert = {
  methods: {
    successAlert(msg) {
      Swal.fire(msg, '', 'success')
    },
    errorAlert(error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
    }
  }
}
