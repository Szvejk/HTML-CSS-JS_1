
const PHOTO = document.querySelectorAll(".photo img");
PHOTO.forEach((photo) => {
  photo.addEventListener( "click", () => console.log(photo));
});