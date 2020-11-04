function nevilleResult(X, Y, input){

	let len = X.length;
	let result = Array.from(Array(len), () => new Array(len));

	for (i = 0; i < len; i++)
		result[i][0] = parseInt(Y[i]);
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
		result[i][0] = Y[i];
	for (i = 1; i < len; i++) {
		for (j = 1; j <= i; j++) {
			result[i][j] = math.simplify("((" + "x" + "-" + X[i - j].toString() + ")*(" + math.rationalize(result[i][j - 1]).toString()+")" +
				"- (" + "x" + "-" + X[i].toString() + ")*(" + math.rationalize(result[i - 1][j - 1]).toString() + "))/(" + X[i].toString() + "-" +  X[i - j].toString() + ")");
		}
	}

	return math.rationalize(result[result.length-1][result.length-1]);
}

function getResult(X,Y,input){
	var data = getData();
	X = data.X;
	Y = data.Y;
	input = parseFloat(document.getElementById("in").value);

	if(!valid(X,Y, input))
		return;

	calculator(X,Y,input)
}

function calculator(X,Y,input){
	console.log(X)
	console.log(Y)
	console.log(input)
	let formulaOutput  = document.getElementById('formula');
	formulaOutput.innerHTML = '\`' + nevilleFormula(X,Y) + '\`';

	let resultOutput  = document.getElementById('result');
	resultOutput.innerHTML = "\`Wynik:   P(" + input + ") = " + nevilleResult(X,Y, input) + "\`";

	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

	drawGraph(X, Y);
}

function wyswietl(event){
	var reader = new FileReader();
	reader.readAsText(event.target.files[0]);
	var fileSatus = document.getElementById("labelChooseFile");

	reader.onload = function(event) {
		fileSatus.innerHTML = "Wczytano !"

		var arr = reader.result.split("\n")
		var X = arr[0].split(",").map(function(x){
			return parseFloat(x)
		});
		var Y = arr[1].split(",").map(function(x){
			return parseFloat(x)
		});
		var input = parseFloat(arr[2]);

		if(!valid(X,Y, input))
			return;

		calculator(X,Y,input)

	};
}


