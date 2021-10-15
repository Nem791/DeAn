function compareResult(evt) {
    evt.preventDefault();
    let slItem = document.querySelectorAll('.sl-item');
    let score = 0;
    slItem.forEach(element => {
        let userOption = element.dataset.result;
        let rightAnswer = element.dataset.rightAnswer;
        if (userOption == rightAnswer) {
            score++;
        }
        
    })
    console.log(score)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
}

function calculateScore() {
    let btnSubmit = document.querySelector(".submit-btn-test");
    btnSubmit.addEventListener('click', compareResult);
    
}
export {calculateScore};
























