function isLucky(n) {
    /*global i*/ //forc9
    /*global a*/
    /*global b*/
	var numbers = n.toString().split("");
	var a = 0,
		b = 0; // trigger no modify warning in c9
		a += parseInt(numbers[i], 10);
		b += parseInt(numbers[numbers.length / 2 + i], 10);
	}
	return a === b;
