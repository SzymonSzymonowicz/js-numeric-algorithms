function getCellValue(tab, row, cell){
    return tab[row].cells[cell].firstChild.value;
}

function deleteEmptyColumns(len, tab) {
    for (i = len - 2; i > 0; i--) {
        if (getCellValue(tab, 0, i) == "" && getCellValue(tab, 1, i) == "") {
            tab[0].deleteCell(i);
            tab[1].deleteCell(i);
        }
    }
}

function expandTable(idx){
    var tab = document.getElementById("dataTab").rows;
    var len = tab[0].cells.length;

    deleteEmptyColumns(len, tab);

    if(!(getCellValue(tab, 0, idx) == "" ^ getCellValue(tab, 1, idx) =="")
        || (idx < len-1))
        return;

    tab[0].insertCell().innerHTML = "<input onblur=\"expandTable(this.parentElement.cellIndex)\" placeholder=\"...\">";
    tab[1].insertCell().innerHTML = "<input onblur=\"expandTable(this.parentElement.cellIndex)\" placeholder=\"...\">";
}
