const cssValue = document.querySelector('h3');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const body = document.getElementById('bg');
const btn = document.getElementById('btnRandom');

const setBg = () => {
	body.style.background = `linear-gradient(to right, ${left.value}, ${right.value})`;
	cssValue.textContent = `${body.style.background};`
}

const getRandomColor = () => {
	const random = `#${Math.floor(Math.random()*16777215).toString(16)}`;
	return random;
}

const setRandomColor = () => {
	left.value = getRandomColor();
	right.value = getRandomColor();
	setBg();
}

// set css gradient properties on load
window.addEventListener('load', setBg);

// set css gradient properties on input change
left.addEventListener('input', setBg);
right.addEventListener('input', setBg);

// set css gradient properties on button click
btn.addEventListener('click', setRandomColor);

// copy css to clipboard
cssValue.addEventListener('click', () => {
	this.document.execCommand('copy');
});

cssValue.addEventListener('copy', (e) => {
	e.preventDefault();
	if (e.clipboardData) {
		e.clipboardData.setData('text/plain', cssValue.textContent);
	}
});