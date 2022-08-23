const grid = document.querySelector('.grid')
const slider = document.querySelector('.slider-range')
let rgb = false;

let DEFAULT = 256
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

let blackButton = document.querySelector("#black");
let rgbButton = document.querySelector("#rgb");

blackButton.addEventListener('click', () => {
    drawOnCanvas(cells, false)
})

rgbButton.addEventListener('click', (e) => {
    drawOnCanvas(cells, true)
})

function generateRandomNumber() { 
    return Math.floor(Math.random() * 255) + 1
}

function drawOnCanvas(cells, rgb) { 
    if (!rgb) { 
        cells.forEach(cell => cell.addEventListener('mouseover', e => {
            cell.style.backgroundColor = "#000"
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

function clearPainting() { 
    cells.forEach(cell => cell.style.backgroundColor = "#FFF")
}

function changeGrid() { 
    let value = document.querySelector('.value')
    grid.style.gridTemplateColumns = value.textContent;
}

slider.addEventListener('input', changeGrid)
drawOnCanvas(cells,rgb)
