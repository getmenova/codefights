function matrixElementsSum(matrix) {
	var total = 0;
	for (var j = 0; j < matrix[0].length; j++)
		for (var i = 0; i < matrix.length; i++) {
			if (matrix[i][j] == 0) break;
			else total += matrix[i][j];
		}
	return total;
}