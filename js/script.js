const grid = document.querySelector('.grid')
const slider = document.querySelector('.slider-range')

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

createCells(DEFAULT)

const cells = document.querySelectorAll('.cell')

cells.forEach(cell => cell.addEventListener('mouseover', e => {
    cell.style.backgroundColor = "#000"
}));

let values = document.querySelectorAll('.value');

//change slider text
slider.addEventListener('input', function() {
    let val = document.querySelector('.slider-range').value
    values.forEach(value => value.textContent = this.value)
    clearGrid(grid)
    grid.style.setProperty('--grid-row', val)
    grid.style.setProperty('--grid-column', val)
    createCells(val * val)
});


function changeGrid() { 
    let value = document.querySelector('.value')
    grid.style.gridTemplateColumns = value.textContent;
}

slider.addEventListener('input', changeGrid)