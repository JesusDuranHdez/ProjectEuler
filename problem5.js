/*
Problem 5:
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
function main() {
	let curr = 20;
	let interval = 20;
	let found = false;
	let n;
	while (!found) {
		curr += interval;
		let isDiv = true;
		for (let i = 1; i <= 20; i++) {
			if (curr % i !== 0)
				isDiv = false;
		}

		if (isDiv) {
			found = true;
			n = curr;
		}
	}

	console.log(n);

}

main();