// Select size input
const submit = document.querySelector('#submitButton');

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function makeGrid(event) {
    event.preventDefault();
    const gridHeight = document.querySelector('#inputHeight').value;
    const gridWidth = document.querySelector('#inputWidth').value;
    const getGrid = document.querySelector('#pixelCanvas');
    // Clears grid if user clicks Submit a second time
    while (getGrid.firstChild) {
        getGrid.removeChild(getGrid.firstChild)
    };
    // Loop creates blank grid with dimensions that were input by user
    for (r = 0; r < gridHeight; r++) {
        const addRow = getGrid.insertRow(r);
        for (c = 0; c < gridWidth; c++) {
            const newCell = addRow.insertCell(c);
        }
    }
})

// Select color input
const colorChoice = document.querySelector('#colorPicker');

// Selected color fills in any grid cell that User single clicks with mouse
document.addEventListener('click', function(event) {
    if (event.target.tagName === "TD") {
        event.target.style.backgroundColor = colorChoice.value;
    }
})