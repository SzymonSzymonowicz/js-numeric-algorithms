function getData(){
    var tab = document.getElementById("dataTab");

    var X = [];
    var Y = [];

    // both rows are always equal in length
    for(var i = 1; i < tab.rows[0].cells.length-1; i++){
        X.push(parseFloat(tab.rows[0].cells[i].firstElementChild.value));
        Y.push(parseFloat(tab.rows[1].cells[i].firstElementChild.value));
    }

/*    console.log(X);
    console.log(Y);*/

    return {X, Y};
}

function valid(X, Y, input){
    // TO DO... validation of X, Y, input
    // return true or false basing on validation
    // many ifs, big if or switch smthg
    if(X.length !== Y.length){
        alert("Error!");
        return false;
    }

    if(typeof input != "number"){
        return false
    }

    // ITD.

    return true;
}
