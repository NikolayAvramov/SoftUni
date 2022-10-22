function solution(n) {
	let startNum = n;
	function add5(n) {
		return startNum + n;
	}
	return add5;
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
