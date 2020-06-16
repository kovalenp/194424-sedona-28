let modalButton = document.querySelector(".button-hotels"),
  modal = document.querySelector(".hotel-search-form");
modal.classList.add("show-none"),
  modalButton.addEventListener("click", function (t) {
    t.preventDefault(),
      modal.classList.toggle("show"),
      modal.classList.toggle("animation"),
      checkIn.focus();
  }),
  document.addEventListener("click", function (t) {
    var o = modal.contains(t.target),
      e = modalButton.contains(t.target);
    o || e || modal.classList.remove("show");
  });
