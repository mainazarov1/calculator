const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const input = document.querySelector('.calculator__input');
const clear = document.querySelector('.clear');
const aclear = document.querySelector('.all-clear');
const equal = document.querySelector('.equal');
let operatorValue;
let prevValue;
let curValue;
aclear.addEventListener('click', e => {
	e.preventDefault();
	input.value = '';
})
clear.addEventListener('click', e => {
	e.preventDefault();
	// let str = String(input.value).split('')
	// str.splice(input.value.length - 1, 1);
	// input.value = str.join('');
	let str = (String(input.value)).substring(0, input.value.length - 1);
	input.value = str;
});
numbers.forEach(number => {
	number.addEventListener('click', e => {
		e.preventDefault();
		if (input.value === '0') {
			input.value = number.textContent;
		} else {
			input.value += number.textContent;
		}
		console.log(number.textContent);
	})
});

operators.forEach(operator => {
	operator.addEventListener('click', e => {
		e.preventDefault();
		operatorValue = operator.textContent;
		prevValue = input.value;
		input.value = '';
	})
});
equal.addEventListener('click', e => {
	e.preventDefault();
	prevValue = Number(prevValue);
	curValue = Number(input.value);
	console.log(String(prevValue), Number(curValue));
	let result = 0;
	if (operatorValue === '+') {
		result = prevValue + curValue;
	}
	if (operatorValue === '-') {
		result = prevValue - curValue;
	}
	if (operatorValue === '*') {
		result = prevValue * curValue;
	}
	if (operatorValue === '/') {
		result = prevValue / curValue;
	}
	input.value = result;
	operatorValue = false;
});