function getData(){
    var a = parseFloat(document.getElementById("aInput").value);
    var b = parseFloat(document.getElementById("bInput").value);
    var epsilon = parseFloat(document.getElementById("epsilonInput").value);

    return {a, b, epsilon};
}
