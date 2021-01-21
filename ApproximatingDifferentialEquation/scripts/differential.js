// exact solution
function exact(x){
    // exact solution func from assignment
    return Math.pow(x, 3) + 2 * Math.pow(x, 2) + 3 * x + 3;
}

function func(x, y){
    return 3/2 * (y - Math.pow(x,3) - 3 * x - 3) + 4 * x + 3;
}

function compareAproximations(x0, y0, h, n){
    let results = [];

    let x = x0;

    let ye, ym, yh;
    ye = ym = yh = y0;

    results.push([0,x, y0, y0, y0, exact(x)]);

    for(k = 0; k <= n - 1; k++){
        //euler
        ye = ye + h * func(x, ye);
        //modified
        ym = ym + h * func(x + h/2, ym + (h/2) * func(x, ym));
        //heun
        yh = yh + h/2 * (func(x, yh) + func(x + h, yh + h * func(x,yh)));

        x = x + h;
        results.push([k+1, x, ye, ym, yh, exact(x)]);
    }

    return results;
}


function calculateDifferential(a, b, n){
    x0 = 0;
    y0 = 3
    a = 0;
    h = (b - a) / n;

    results = compareAproximations(x0, y0, h, n);
    headers = ["k", "$$x_k$$", "Euler", "Zmodyfikowany Euler", "Heun", "Dokładny wynik"]

    console.table(results);
    // aprox solutions
    createTable(headers, results, 'resultTable');
    // errors
    calcMaxErrors(results);
}

function calcMaxErrors(data){

    var result = [];

    var headers = ["Metoda","k", "$$x_k$$", "Przybliżona wart.", "Dokładna wart.", "Max błąd"];
    var eulerMaxError = calcMaxErrorForColumn(data, 2);
    var modifiedMaxError = calcMaxErrorForColumn(data, 3);
    var heunMaxError = calcMaxErrorForColumn(data, 4);

    eulerMaxError.unshift("Euler");
    modifiedMaxError.unshift("Zmodyfikowany Euler");
    heunMaxError.unshift("Heun");

    result.push(eulerMaxError, modifiedMaxError, heunMaxError);
    console.table(eulerMaxError)

    createTable(headers, result, 'maxErrorsTable')
}

function calcMaxErrorForColumn(data, i) {
    let lastIndex = data[0].length-1;
    let errors = data.map(row => {
        return [row[0], row[1], row[i], row[lastIndex], Math.abs(row[lastIndex] - row[i])]
    });

    // console.table(errors);
    var maxError = errors.reduce((prev, curr) => prev[4] > curr[4] ? prev : curr);
    // console.table(maxError);
    return maxError;
}
