// Select size input
//define variables to can draw canvas element basd on height,width
let canvasShap = document.querySelector('#pixelCanvas');
let SelectedHeight = document.querySelector('#inputHeight');
let SelectedWidth = document.querySelector('#inputWidth');

document.getElementById("sizePicker").addEventListener("submit", myFunction);
function myFunction() {
 makeGrid();
}

// Select color input
let SelectedColor = document.querySelector('#colorPicker');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // Your code goes here!
  debugger;
  canvasShap.innerHTML = '';
  let tableHeight = SelectedHeight.value;
  let tableWidth = SelectedWidth.value;
  
 //This function to fills slected color in the cell by click.
  let setColor = function (tableCol) {
    tableCol.addEventListener('click', function () {
      tableCol.style.backgroundColor = SelectedColor.value;
    });
  }

  //draw table.
  for (let x = 0; x < tableHeight; x++) {
    let tableTr = canvasShap.insertRow(x);
    for (let y = 0; y < tableWidth; y++) {
      let tableCol = tableTr.insertCell(y);
      tableCol.addEventListener('click', setColor(tableCol));
    }
  }

}