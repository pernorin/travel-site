//vid42 13min

class Person {
	constructor(name, favoriteColor) {
		this.name = name;
		this.favoriteColor = favoriteColor;
	}
	greet() {
		console.log(
			'Hello, my name is ' +
				this.name +
				' and my favorite color is ' +
				this.favoriteColor +
				'.'
		);
	}
}

/* 
function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function () {
		console.log(
			'Hello, my name is ' +
				this.name +
				' and my favorite color is ' +
				this.favoriteColor +
				'.'
		);
	};
}
 */

export default Person;

/* Kod i App.js från sec13*/

class Adult extends Person {
	payTaxes() {
		console.log(this.name + ' now owes zero taxes.');
	}
}

let john = new Person('John Doe', 'purple');
john.greet();
let jane = new Adult('Jane Smith', 'green');
jane.greet();
jane.payTaxes();
