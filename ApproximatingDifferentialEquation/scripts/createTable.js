function createTable(tableHeaders, tableData, elementId) {
    var table = document.createElement('table');


    var tableHead = document.createElement('thead');

    if(tableHeaders.length !== tableData[0].length) {
        console.table(tableHeaders);
        console.table(tableData[0]);
        console.log("Headers not equal with data")
        return;
    }

    var thRow = document.createElement('tr');
    tableHeaders.forEach(header => {
        var thCell = document.createElement('th');
        thCell.appendChild(document.createTextNode(header));
        thRow.appendChild(thCell);
    })

    tableHead.appendChild(thRow);

    table.appendChild(tableHead);

    var tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);

    var element = document.getElementById(elementId);
    // element.style.display = 'flex';
    element.style.visibility = 'visible';
    if (element.hasChildNodes()) {
        element.childNodes.forEach(node => node.remove());
    }
    element.appendChild(table);
}
