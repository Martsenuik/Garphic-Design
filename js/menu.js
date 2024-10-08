(() => {
    const refs = {
      openModalBtn: document.querySelector(".open-menu"),
      closeModalBtn: document.querySelector(".close-menu"),
      modal: document.querySelector("[data-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();