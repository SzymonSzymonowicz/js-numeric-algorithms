function validate(X, Y, input, table) {
    if (X.length !== Y.length) {
        alert("Error! Zbiory X i Y sa roznej dlugosci!");
        return false;
    }
    if (typeof input != "number" || isNaN(input)) {
        alert("Szukana wartosc x nie jest liczba!");
        return false
    }

    //if (!(isArrayValid(X, "X", table) && isArrayValid(Y, "Y", table)))
    if (!areArraysValid([X,Y], table))
        return false;

    // Checking only the X axis, because the values on Y axis can repeat unlike those on X
    if (hasDuplicates(X, "X", table))
        return false

    return true;
}

function areArraysValid(arrays, table) {
    var invalidIndexes = [];

    for (array of arrays) {
        for (i = 0; i < array.length; i++) {
            if (typeof array[i] != "number" || isNaN(array[i])) {
                invalidIndexes.push(i);
            }
        }
    }

    var set = new Set(invalidIndexes);

    if (set.size != 0) {
        alert("Znaleziono bledne typ wartosci w tabeli na indeksie/ach: " + Array.from(set).sort((a,b) => a-b));
        if(typeof table !== 'undefined')
            showWrongVals(table, Array.from(set));
        return false;
    }

    return true;
}

function hasDuplicates(array, name, table){
    var uniqs = [];
    var dups_idx = [];

    for (i = 0; i < array.length; i++) {
        if (!uniqs.includes(array[i])) {
            uniqs.push(array[i]);
        }
        else {
            dups_idx.push(i);
        }
    }

    if (Array.isArray(dups_idx) && dups_idx.length) {
        alert("Wpisano do tablicy " + name + " duplikaty!! Indeksy o blednych wartosciach: " + dups_idx);
        if(typeof table !== 'undefined')
            showWrongVals(table, dups_idx);
        return true;
    }

    return false;
}

function showWrongVals(table, idxArr) {
    var prevColor = table.rows[0].cells[0].style.backgroundColor;

    for(i = 0; i < table.rows.length; i++){
        for(idx of idxArr){
            table.rows[i].cells[idx+1].style.backgroundColor = "#cd1e1e";
            table.rows[i].cells[idx+1].firstElementChild.style.backgroundColor = "#cd1e1e";
            table.rows[i].cells[idx+1].style.animation = 'fading 2s';
            table.rows[i].cells[idx+1].firstElementChild.style.animation = 'fading 2s';
        }
    }

    setTimeout(function repaint(){
        for(i = 0; i < table.rows.length; i++){
            for(idx of idxArr){
                table.rows[i].cells[idx+1].style.backgroundColor = prevColor;
                table.rows[i].cells[idx+1].firstElementChild.style.backgroundColor = prevColor;
                table.rows[i].cells[idx+1].style.animation = 'fading 2s';
                table.rows[i].cells[idx+1].firstElementChild.style.animation = 'fading 2s';
            }
        }
    }, 10000);

}
