function validate(a, b, n) {
    if (typeof a != "number" || isNaN(a)) {
        alert("Poczatek przedzialu musi byc liczba!");
        return false;
    }

    if (typeof b != "number" || isNaN(b)) {
        alert("Koniec przedzialu musi byc liczba!");
        return false;
    }

    if (typeof n != "number" || isNaN(n)) {
        alert("Liczba podziału odcinka n musi byc liczba!");
        return false;
    }

    if (a > b){
        alert("Nieprawidlowy przedzial! Poczatek przedzialu nie może byc wiekszy od jego konca!")
        return false;
    }

    if (a == b){
        alert("Nieprawidlowy przedzial! Oba konce przedzialu nie moga takie same!")
        return false;
    }

    if (!isInt(n) || n < 0 || (n + "").indexOf(",") >= 0){
        alert("Liczba podzialow n musi byc liczba naturalna!")
        return false;
    }

    return true;
}

function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}
