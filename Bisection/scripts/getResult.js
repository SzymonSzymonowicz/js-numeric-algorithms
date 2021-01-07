function getResult(){
    var data = getData();
    a = data.a;
    b = data.b;
    epsilon = data.epsilon;

    if(!validate(a, b, epsilon))
        return;

    calculate(a, b, epsilon)
}

function calculate(a, b, epsilon){
    let result = biscetion(a, b, epsilon);

    let resOutX  = document.getElementById('resultX');
    let resOutK  = document.getElementById('resultSteps');
    let resOutExact  = document.getElementById('resultExact');

    resOutX.innerHTML = "Przybliżone rozwiązanie równania:   $$x_k = " + result.c + "$$";
    resOutK.innerHTML = "Liczba wykonanych kroków $$k = " + result.k + "$$";
    resOutExact.innerHTML = "$$f (" + result.c + ") = " + result.val + "$$";

    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

    drawGraph(a, b, result.c);
}
