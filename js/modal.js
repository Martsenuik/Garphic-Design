(() => {
    const refs = {
      openModalBtn: document.querySelector(".modal-open" ),
      closeModalBtn: document.querySelector(".modal-close"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
})();
  

// (() => {
//     const refs = {
//       openModalBtn: document.querySelectorAll(".modal-open" ),
//       closeModalBtn: document.querySelectorAll(".modal-close"),
//       modal: document.querySelector("[data-modal]"),
//   };
//  for (let i = 0; i < refs.openModalBtn.length; i++) {
// refs.openModalBtn[i].addEventListener("click", function() {
//       refs.modal.classList.toggle("is-hidden");
//       document.body.classList.toggle("no-scroll");
//     })
//   }
//   for (let i = 0; i < refs.closeModalBtn.length; i++) {
// refs.closeModalBtn[i].addEventListener("click", function() {
//       refs.modal.classList.toggle("is-hidden");
//       document.body.classList.toggle("no-scroll");
//     })
//  }
    
//   }
  
    // refs.openModalBtn.addEventListener("click", toggleModal);
    // refs.closeModalBtn.addEventListener("click", toggleModal);
  
    // function toggleModal() {
    //   refs.modal.classList.toggle("is-hidden");
    //   document.body.classList.toggle("no-scroll");
    // }
  // })();