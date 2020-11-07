function getResult(X,Y,input){
    var data = getData();
    X = data.X;
    Y = data.Y;
    input = parseFloat(document.getElementById("in").value);

    if(!validate(X,Y, input, document.getElementById("dataTab")))
        return;

    calculate(X,Y,input)
}

function calculate(X,Y,input){
    let formulaOutput  = document.getElementById('formula');
    formulaOutput.innerHTML = '\`' + nevilleFormula(X,Y) + '\`';

    let resultOutput  = document.getElementById('result');
    resultOutput.innerHTML = "\`Wynik:   P(" + input + ") = " + nevilleResult(X,Y, input) + "\`";

    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

    drawGraph(X, Y);
}

function getResultFromFile(event){
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

        if(!validate(X,Y, input))
            return;

        calculate(X,Y,input)
    };
}
