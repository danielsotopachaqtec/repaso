let date = new Date();

handleClick = () => {
	console.log('he hecho click a la fecha de: ', date);
};
// document.body.innerHTML = "<h1 class='date'> Today's date is " + date + '</h1>';
// let p = document.createElement('P');
// let t = document.createTextNode('Paragraph text.');
// p.classList.add('text');
// p.appendChild(t);

// document.body.appendChild(p);

// alert("Today's date is " + date);

// const greeting = 'hello';
// let greatting = 'hello x2';
// var greattings = 'hello all';

let food;

food = [
	{
		id: 1,
		name: 'Fruits',
		description: 'some fruits',
	},
	{
		id: 2,
		name: 'Soap',
		description: 'some soap',
	},
	{
		id: 3,
		name: 'drinks',
		description: 'some drinks',
	},
	{
		id: 4,
		name: 'ice cream',
		description: 'some ice cream',
	},
];

// initialing a new string primitive

// const stringPrimitive = 'a new string';

// initializing a new String object
// const stringObject = new String('A new String');

console.log('food:', food);

const text = 'How are you?';

// H o w a r e y o u ?
// 0 1 2 3 4 5 6 7 8 9

console.log('slice', text.slice(8, 11));
console.log('length', text.length);
console.log('toUpperCase:', text.toUpperCase());
console.log('toLowerCase:', text.toLowerCase());
const textSplit = text.split(' ');

console.log('Text Split', textSplit[1]);

const tooMuchWhitespace = '                  How are you?                     ';
const trimmed = tooMuchWhitespace.trim();
console.log(trimmed);

// const newString = text.replace('How', 'Where');
// console.log('New String Element', newString);

const originalString =
	"javascript is a programming language. I'm learning javascript.";

const newString = originalString.replace(/javascript/gi, 'Javascript');

console.log(newString);

let TrueValue = String(true);
let StringCount = String(49);
let count = 49;

console.log(Boolean(' '));

food && food.length > 0;
