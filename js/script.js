const grid = document.querySelector('.grid')
const slider = document.querySelector('.slider-range')
let colorPicker = document.querySelector('#colorpicker');
let paintColor = '#000000';

colorPicker.addEventListener('input', () => {
    color = document.querySelector('#colorpicker').value;
    paintColor = color;
});

let rgb = false;

const DEFAULT = 256

function createCells(param) {
    for(let i = 0; i < param; i++) {
        const div = document.createElement('div')
        div.classList.add('cell')
        grid.appendChild(div)
    }
}

function clearGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 255) + 1
}

function drawOnCanvas(cells, rgb) {
    if (!rgb) {
        cells.forEach(cell => cell.addEventListener('mouseover', e => {
            cell.style.backgroundColor = paintColor;
        }));
    } else {
        cells.forEach(cell => cell.addEventListener('mouseover', e => {
            let red = generateRandomNumber();
            let green = generateRandomNumber();
            let blue = generateRandomNumber();
            cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        }));
    }
}

function clearPainting() {
    cells.forEach(cell => cell.style.backgroundColor = "#FFF")
}

function changeGrid() {
    let value = document.querySelector('.value')
    grid.style.gridTemplateColumns = value.textContent;
}

const blackButton = document.querySelector("#black");
const rgbButton = document.querySelector("#rgb");

blackButton.addEventListener('click', () => {
    drawOnCanvas(cells, false)
})

rgbButton.addEventListener('click', (e) => {
    drawOnCanvas(cells, true)
})

createCells(DEFAULT)

let cells = document.querySelectorAll('.cell')
let values = document.querySelectorAll('.value');

slider.addEventListener('input', function() {
    let val = document.querySelector('.slider-range').value
    values.forEach(value => value.textContent = this.value)
    clearGrid(grid)
    grid.style.setProperty('--grid-row', val)
    grid.style.setProperty('--grid-column', val)
    createCells(val * val)
    cells = document.querySelectorAll('.cell')
    drawOnCanvas(cells, rgb)
});

slider.addEventListener('input', changeGrid)
drawOnCanvas(cells,rgb)
