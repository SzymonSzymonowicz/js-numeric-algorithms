function expandHelper(tab, row, cell){
    return tab[row].cells[cell].firstChild.value;
}

function expandTable(idx){
    var tab = document.getElementById("dataTab").rows;
    var len = tab[0].cells.length;

    if(!(expandHelper(tab, 0, idx) == "" ^ expandHelper(tab, 1, idx) =="")
        || (idx < len-1))
        return;

    tab[0].insertCell().innerHTML = "<input onblur=\"expandTable(this.parentElement.cellIndex)\" placeholder=\"...\">";
    tab[1].insertCell().innerHTML = "<input onblur=\"expandTable(this.parentElement.cellIndex)\" placeholder=\"...\">";
}
