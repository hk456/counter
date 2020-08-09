let resetBtn = document.querySelector('.reset');
let incrementBtn = document.querySelector('.increment');
let decrementBtn = document.querySelector('.decrement');
let counter = parseInt(document.querySelector('.counter').textContent);

function reset () {
	// body...	
	counter = 0;
	document.querySelector('.counter').textContent = counter.toString(10);
}

function increment () {
	// body...
	counter++;
	document.querySelector('.counter').textContent = counter.toString(10);
}

function decrement () {
	// body...
	counter--;
	document.querySelector('.counter').textContent = counter.toString(10);
}

document.addEventListener('click', function(e) {
	if (e.target == resetBtn) reset();
	if (e.target == incrementBtn) increment();
	if (e.target == decrementBtn) decrement();
});