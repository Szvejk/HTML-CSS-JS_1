const PHOTO = document.querySelectorAll('.photo img');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup__close');
const POPUP_IMG = document.querySelector('.popup__img');
const ARROW_LEFT = document.querySelector('.popup__arrow--left');
const ARROW_RIGHT = document.querySelector('.popup__arrow--right');

let currentImgIndex;

PHOTO.forEach((photo, index) => {
	photo.addEventListener('click', (e) => {
		POPUP.classList.remove('hidden');
		POPUP_IMG.src = e.target.src;
		currentImgIndex = index;
	});
});

POPUP_CLOSE.addEventListener('click', () => {
	POPUP.classList.add('hidden');
});
const myFunction = () => {};

ARROW_RIGHT.addEventListener('click', () => {});
