function allLongestStrings(inputArray) {
	var r = [];
	var mL = 0;
	for (var i = 0; i < inputArray.length; i++) {
		if (inputArray[i].length > mL) {
			r.length = 0;
			r.push(inputArray[i]);
			mL = inputArray[i].length;
		} else if (inputArray[i].length == mL) {
			r.push(inputArray[i]);
		}
	}
	return r;
}