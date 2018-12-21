/*
Problem 4:
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function main() {
	console.time('palindrome');
	let start = 100;
	let end = 999;
	let higherPalindrome = 0;

	while(start < end) {
		let i = start;
		while(i<=end) {
			let n = start*i;
			if(isPalindrome(n) && n > higherPalindrome)
				higherPalindrome = n;
			i++;
		}
		start++;
	}

	console.log(higherPalindrome);
	console.timeEnd('palindrome');
	return higherPalindrome;
}

function isPalindrome(number) {
	let numberStr = toString(number);
	return numberStr === reverseString(numberStr);
}

function toString(number) {
	return '' + number;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

main();