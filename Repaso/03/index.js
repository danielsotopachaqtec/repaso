// const p = document.querySelector('p');
// const button = document.querySelector('button');
// // Function to modify the text content of the paragraph

// const changeText = () => {
// 	p.textContent = 'I changed because of an inline event handler.';
// };

// const alertText = () => {
// 	alert('Will I change?');
// 	button.removeEventListener('click', alertText);
// };

// // add event handler as a property of the button element

// button.addEventListener('click', changeText);
// button.addEventListener('click', alertText);

document.addEventListener('keydown', (event) => {
	var element = document.querySelector('p');

	// set variables for key down

	var a = 'KeyA';
	var s = 'KeyS';
	var d = 'KeyD';
	var w = 'KeyW';

	// set a direction for each code
	console.log(event);
	console.log(element);
	switch (event.code) {
		case a:
			element.textContent = 'Left';
			break;
		case s:
			element.textContent = 'Down';
			break;
		case d:
			element.textContent = 'Right';
			break;
		case w:
			element.textContent = 'Up';
			break;
	}
});
