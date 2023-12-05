const bg = document.querySelector('.bg');

setTimeout(() => {
	window.addEventListener('mousemove', function (e) {
		if (window.innerWidth >= 1300) {
			const x = e.clientX;
			const a = window.innerWidth / 3;

			if (x <= a) {
				bg.style.transform = `translate(8%)`;
			} else if (x > a && x < 2 * a) {
				bg.style.transform = '';
			} else if (x >= 2 * a) {
				bg.style.transform = 'translate(-8%)';
			}
		}
	});
}, 4000);

const svgText = document.querySelector('#svg-text');

if (window.innerWidth <= 540) {
	svgText.setAttribute('x', '-7');
	svgText.setAttribute('y', '146');
} else if (window.innerWidth <= 730) {
	svgText.setAttribute('x', '-10');
	svgText.setAttribute('y', '250');
} else if (window.innerWidth <= 980) {
	svgText.setAttribute('x', '-20');
	svgText.setAttribute('y', '320');
} else if (window.innerWidth <= 1299) {
	svgText.setAttribute('y', '400');
}

window.addEventListener('resize', () => {
	if (window.innerWidth <= 540) {
		svgText.setAttribute('x', '-7');
		svgText.setAttribute('y', '146');
	} else if (window.innerWidth <= 730) {
		svgText.setAttribute('x', '-10');
		svgText.setAttribute('y', '250');
	} else if (window.innerWidth <= 980) {
		svgText.setAttribute('x', '-20');
		svgText.setAttribute('y', '320');
	} else if (window.innerWidth <= 1299) {
		svgText.setAttribute('y', '400');
	} else if (window.innerWidth > 1299) {
		svgText.setAttribute('x', '-29');
		svgText.setAttribute('y', '509');
	}
	bg.style.transform = `translate(0)`;
});

const menu = document.querySelector('#menu');
const menuOpenButton = document.querySelector('#menu-open');
const menuCloseButton = document.querySelector('#menu-close');

menuOpenButton.addEventListener('click', () => {
	menu.classList.add('show');
});

menuCloseButton.addEventListener('click', () => {
	menu.classList.remove('show');
});

const ticketPopup = document.querySelector('.ticket-popup');
const ticketOpenButton = document.querySelector('.header__menu-button');
const ticketCloseButton = document.querySelector('.ticket-popup__close-button');
const ticketBuyButton = document.querySelector('.ticket-popup__buy-button');

ticketOpenButton.addEventListener('click', (e) => {
	ticketPopup.classList.add('show');
	menu.classList.remove('show');
});

ticketCloseButton.addEventListener('click', (e) => {
	ticketPopup.classList.remove('show');
});

ticketBuyButton.addEventListener('click', (e) => {
	e.preventDefault();
});

const dateRegister = document.querySelector('#date-register');
const dateDeparture = document.querySelector('#date-departure');
const personsNumber = document.querySelector('#persons-number');

const dateRegisterList = document.querySelector('#date-register-list');
const dateDepartureList = document.querySelector('#date-departure-list');
const personsNumberList = document.querySelector('#persons-number-list');

dateRegister.addEventListener('click', (e) => {
	if (dateRegisterList.classList.contains('show')) {
		dateRegisterList.classList.remove('show');
	} else {
		dateRegisterList.classList.add('show');
	}
});

dateDeparture.addEventListener('click', (e) => {
	if (dateDepartureList.classList.contains('show')) {
		dateDepartureList.classList.remove('show');
	} else {
		dateDepartureList.classList.add('show');
	}
});

personsNumber.addEventListener('click', (e) => {
	if (personsNumberList.classList.contains('show')) {
		personsNumberList.classList.remove('show');
	} else {
		personsNumberList.classList.add('show');
	}
});

dateRegisterList
	.querySelectorAll('.ticket-popup__selection-item-select')
	.forEach((el) => {
		el.addEventListener('click', () => {
			dateRegister.textContent = el.textContent;
			dateRegisterList.classList.remove('show');
		});
	});

dateDepartureList
	.querySelectorAll('.ticket-popup__selection-item-select')
	.forEach((el) => {
		el.addEventListener('click', () => {
			dateDeparture.textContent = el.textContent;
			dateDepartureList.classList.remove('show');
		});
	});

personsNumberList
	.querySelectorAll('.ticket-popup__selection-item-select')
	.forEach((el) => {
		el.addEventListener('click', () => {
			personsNumber.textContent = el.textContent;
			personsNumberList.classList.remove('show');
		});
	});
