const PHOTO = document.querySelectorAll('.photo img');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup__close');
const POPUP_IMG = document.querySelector('.popup__img');
const ARROW_LEFT = document.querySelector('.popup__arrow--left');
const ARROW_RIGHT = document.querySelector('.popup__arrow--right');

let currentImgIndex;

const showNextImg = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = PHOTO.length - 1;
	} else {
		currentImgIndex--;
	}
	POPUP_IMG.src = PHOTO[currentImgIndex].src;
};

const showPreviousImg = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = PHOTO.length - 1;
	} else {
		currentImgIndex--;
	}
	POPUP_IMG.src = PHOTO[currentImgIndex].src;
};

const closePopup = () => {
  POPUP.classList.add("fade-out");
  setTimeout(() => {
    POPUP.classList.add("hidden");
    POPUP.classList.remove("fade-out");
  }, 300);
	
};

PHOTO.forEach((photo, index) => {
  const showPopup = (e) => {
		POPUP.classList.remove('hidden');
		POPUP_IMG.src = e.target.src;
		currentImgIndex = index;
	}
	photo.addEventListener('click', showPopup);

photo.addEventListener("keydown",(e) => {
  if (e.code === "Enter") {
    showPopup(e);
  }
})




});

POPUP_CLOSE.addEventListener('click', closePopup);

ARROW_RIGHT.addEventListener('click', showNextImg);

ARROW_RIGHT.addEventListener('click', showPreviousImg);

ARROW_RIGHT.addEventListener('click', () => {
	if (currentImgIndex === PHOTO.length - 1) {
		currentImgIndex = 0;
	} else {
		currentImgIndex = currentImgIndex + 1;
	}
	POPUP_IMG.src = PHOTO[currentImgIndex].src;
});

ARROW_LEFT.addEventListener('click', () => {
	if (currentImgIndex === 0) {
		currentImgIndex = PHOTO.length - 1;
	} else {
		currentImgIndex--;
	}
	POPUP_IMG.src = PHOTO[currentImgIndex].src;
});
document.addEventListener('keydown', (e) => {
	if (!POPUP.classList.contains('hidden')) {
		if (e.code === 'ArrowRight') {
		}
		showNextImg();

		if (e.code === 'ArrowLeft') showPreviousImg();

		if (e.code === 'Escape') {
			closePopup();
		}
		console.log(e);
	}
});
POPUP.addEventListener("click", (e) => {
if (e.target === POPUP) {
  closePopup();
}
});
