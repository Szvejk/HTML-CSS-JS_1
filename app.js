
const PHOTO = document.querySelectorAll(".photo img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
// const POPUP_IMG = document.querySelector(".popup__img");

PHOTO.forEach((photo) => {
  photo.addEventListener("click", () => {
      POPUP.classList.remove("hidden");
      // console.log(e);
    });
});

POPUP_CLOSE.addEventListener("click", () => {
  POPUP.classList.add("hidden");
});
// const myFunction = () => {};
