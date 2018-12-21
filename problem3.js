/* 
Problem 3:
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function main() {
	let obj = 600851475143;
	let curr = 3;
	let factors = [];
	let higherPrime = 1;

	while(multiplyFactors(factors) < obj) {
		if(isPrime(curr) && obj % curr === 0) {
			factors.push(curr);
			higherPrime = curr;
		}
		curr += 2;
	}

	console.log(factors.join('*'));
	console.log(higherPrime);
	return higherPrime;
}

function isPrime(n) {
	if (n <= 3)
		return n > 1;
	else if (n % 2 === 0 || n % 3 === 0)
		return false;

	let i = 5;

	while (i * i <= n) {
		if (n % i === 0 || n % (i + 2) === 0)
			return false;
		i += 6;
	}

	return true;
}

function multiplyFactors(factors) {
	return factors.reduce((current, f) => {
		return current*f;
	}, 1);
}

main();