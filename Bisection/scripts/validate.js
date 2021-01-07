function validate(a, b, epsilon) {
    if (typeof a != "number" || isNaN(a)) {
        alert("Poczatek przedzialu nie jest liczba!");
        return false;
    }

    if (typeof b != "number" || isNaN(b)) {
        alert("Koniec przedzialu nie jest liczba!");
        return false;
    }

    if (typeof epsilon != "number" || isNaN(epsilon)) {
        alert("Dokladnosc rozwiazania nie jest liczba!");
        return false;
    }

    if (a > b){
        alert("Nieprawidlowy przedzial! Poczatek przedzialu jest wiekszy od jego konca!")
        return false;
    }

    if (a == b){
        alert("Nieprawidlowy przedzial! Oba konce przedzialu są takie same!")
        return false;
    }

    if (epsilon <= 0 || epsilon >= 1) {
        alert("Dokladnosc rozwiazania nie zawiera sie w zbiorze (0, 1)");
        return false;
    }

    if (func(a) * func(b) >= 0) {
        alert("Nie spełniono warunku f(a) * f(b) >= 0");
        return false;
    }

    return true;
}
