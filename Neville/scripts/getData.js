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
