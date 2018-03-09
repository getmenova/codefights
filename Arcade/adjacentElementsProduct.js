const adjacentElementsProduct = inputArray => {
	let largestProduct = inputArray[0] * inputArray[1];
	for (let i = 1; i < inputArray.length - 1; i++) {
		if (inputArray[i] * inputArray[i + 1] > largestProduct) {
			largestProduct = inputArray[i] * inputArray[i + 1];
		}
	}
	return largestProduct;
}