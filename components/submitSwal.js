function confirmSubmit (submitTitle, submitText, submitIcon, confirmSubmitText, confirmedFunction) {
    Swal.fire({
      title: submitTitle,
      text: submitText,
      icon: submitIcon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmSubmitText,
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        confirmedFunction();
      }
    });
}
export {confirmSubmit};