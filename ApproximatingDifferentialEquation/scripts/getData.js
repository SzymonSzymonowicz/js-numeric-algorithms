function getData() {
    var a = document.getElementById("aInput").innerHTML;
    var b = document.getElementById("bInput").value;
    var n = document.getElementById("splitInput").value;

    if (containsComma(a, b, n)) {
        return;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    n = parseFloat(n);

    console.log(a);
    console.log(b);
    console.log(n);


    return {a: a,b: b,n: n};
}

function containsComma(a, b, n){
    if((a+"").indexOf(',') >= 0) {
      alert("Poczatek przedzialu nie moze byc liczba zmiennopzecinkowa / ułamkiem (czyli #,##)!");
      return true;
    }
    if((b+"").indexOf(',') >= 0) {
      alert("Koniec przedzialu nie moze byc liczba zmiennopzecinkowa / ułamkiem (czyli #,##)!");
      return true;
    }
    if((n+"").indexOf(',') >= 0) {
      alert("Podział przedziału n nie moze byc liczba zmiennopzecinkowa / ułamkiem (czyli #,##)!");
      return true;
    }

    return false;
}