const container = document.getElementById('container');
let dim = 16;
initGrid(dim);

function initGrid(dim) {
    for (let i = 0; i < dim; i++) {
        const row = document.createElement('div');
        row.id = 'row' + i;
        row.className = 'row';
        container.appendChild(row);
        for (let j = 0; j < dim; j++) {
            const square = document.createElement('div');
            square.id = 'grid' + i * j;
            square.className = 'grid';
            row.appendChild(square);
        }
    };

    const grid = document.querySelectorAll('.grid');
    console.log(grid);
    grid.forEach(grid => grid.style.width = `${960/dim}px`);
    grid.forEach(grid => grid.style.height = `${960/dim}px`);

    // Highlighting cell hovering above

    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', function (e) {
        e.target.className = 'hover';
    }));

    grids.forEach(grid => grid.addEventListener('mouseout', function (e) {
        e.target.className = 'grid';
    }));
};



function newGrid(dim) {
    const existing = document.querySelector('#container');
    while (existing.firstChild) {
        existing.removeChild(existing.firstChild);
    }
    initGrid(dim);
};

// Change Size Button

const gridSize = document.querySelector('#grid-size');
console.log(gridSize);
gridSize.addEventListener('click', function (e) {
    console.log(e.target);
    dim = prompt('How many squares per side?');
    newGrid(dim);
});

// Implementation of a pen on click in progress below
const grid = document.querySelectorAll('.grid');
grid.forEach(grid => grid.addEventListener('click', function(e) {
    e.target.className = 'clicked';
}));