const ocean1 = 'Pacific';
const ocean2 = 'Atlantic';
const ocean3 = 'Indian';
const ocean4 = 'Arctic';
const ocean5 = 'Antartic';

let oceans = [ocean1, ocean2, ocean3, ocean4, ocean5];

console.log(oceans[0]);

let sharks = new Array('HAmmerhead', 'Great White', 'Tiger');

console.log(sharks);

let mixedDate = ['String', null, 7, ['another', 'array']];

console.log(mixedDate[1]);

const lastIndex = mixedDate.length - 1;
console.log(mixedDate[lastIndex]);

let nestedArray = [
	['Salmon', 'Halibut'],
	['Coral', 'Reef'],
];

console.log(nestedArray[1][0]);

nestedArray[2] = ['Dog', 'Cat'];

console.log(nestedArray);

nestedArray.push(['Horse', 'Pig']);

nestedArray.splice(0, 1);

console.log('1:', nestedArray);

let fish = ['oyster', 'shirmp', 'clam', 'mussel'];

// for (let i = 0; i < shellfish.length; i++) {
// 	console.log(i, shellfish[i]);
// }

for (let shellfish of fish) {
	console.log(shellfish);
}

const objectLiteral = {};

const objectConstructor = new Object();

const gimli = {
	name: 'Gimli',
	race: 'dwarf',
	weapon: 'axe',
	greet: function () {
		return `Hi, my name is ${this.name}!`;
	},
};

console.log(gimli['weapon']);

gimli.age = 139;

console.log(gimli['age']);

gimli.fight = function () {
	return `Gimli attacks with an ${this.weapon}`;
};

console.log(gimli.fight());

for (let key in gimli) {
	console.log(gimli[key]);
}

for (let key in gimli) {
	console.log(key.toUpperCase() + ':', gimli[key]);
}

console.log(Object.keys(gimli));

let now = new Date();
now.getUTCHours(10);

console.log(now);
