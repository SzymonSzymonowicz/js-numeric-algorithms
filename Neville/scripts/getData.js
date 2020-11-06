function getData(){
    var tab = document.getElementById("dataTab");

    var X = [];
    var Y = [];

    // both rows are always equal in length
    for(var i = 1; i < tab.rows[0].cells.length-1; i++){
        X.push(parseFloat(tab.rows[0].cells[i].firstElementChild.value));
        Y.push(parseFloat(tab.rows[1].cells[i].firstElementChild.value));
    }

    return {X, Y};
}

function valid(X, Y, input){
    if(X.length !== Y.length){
        alert("Error! Zbiory X i Y sa roznej dlugosci!");
        return false;
    }
    if(typeof input != "number" || isNaN(input)){
        alert("Szukana wartosc x nie jest liczba!");
        return false
    }

    if(!(isTableValid(X, "X") && isTableValid(Y,"Y")))
        return false;

    return true;
}

function isTableValid(array, name) {
    var invalidIndexes = [];

    for (i = 0; i < array.length; i++) {
        if (typeof array[i] != "number" || isNaN(array[i])) {
            invalidIndexes.push(i);
        }
    }

    if (Array.isArray(invalidIndexes) && invalidIndexes.length) {
        alert("Znaleziono bledny typ wartosci w tabeli " + name + " na indeksie/ach " + invalidIndexes);
        return false;
    }

    return true;
}
