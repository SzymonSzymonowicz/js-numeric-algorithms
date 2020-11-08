function nevilleResult(X, Y, input){
	let len = X.length;
	let result = Array.from(Array(len), () => new Array(len));

	for (i = 0; i < len; i++)
		result[i][0] = parseFloat(Y[i]);
	for (i = 1; i < len; i++) {
		for (j = 1; j <= i; j++) {
			result[i][j] = ((input - X[i - j])*(result[i][j - 1])
				- (input - X[i])*(result[i - 1][j - 1]))/(X[i] - X[i - j]);
		}
	}

	return result[result.length-1][result.length-1];
}

function nevilleFormula(X, Y){
	let len = X.length;
	let result = Array.from(Array(len), () => new Array(len));

	for (i = 0; i < len; i++)
		result[i][0] = parseFloat(Y[i]);
	for (i = 1; i < len; i++) {
		for (j = 1; j <= i; j++) {
			result[i][j] = math.rationalize("((x-" + X[i - j].toString() + ")*(" + math.rationalize(result[i][j - 1]).toString()+")" +
				"-(x-" + X[i] + ")*(" + math.simplify(result[i - 1][j - 1]).toString() + "))/(" + (X[i] -X[i - j]) + ")").toString();
		}
	}

	return math.rationalize(result[result.length-1][result.length-1]);
}
