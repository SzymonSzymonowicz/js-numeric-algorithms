function getResult(){
    var data = getData();

    a = data.a;
    b = data.b;
    n = data.n;

    if(!validate(a, b, n))
        return;

    calculate(a, b, n)
}

function calculate(a, b, n){
    calculateDifferential(a, b, n);

    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

    drawGraph(a, b, 0);
}
