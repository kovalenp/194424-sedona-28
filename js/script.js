let modalButton = document.querySelector(".button-hotels");
let modal = document.querySelector(".hotel-search-form");

modal.classList.add("show-none");

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("show");
  modal.classList.toggle("animation");
  checkIn.focus();
});

document.addEventListener("click", function (evt) {
  let isClickInsideModal = modal.contains(evt.target);
  let isClickInsideModalButton = modalButton.contains(evt.target);
  if (!isClickInsideModal && !isClickInsideModalButton) {
    modal.classList.remove("show");
  }
});
