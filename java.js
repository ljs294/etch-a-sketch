const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.id = 'row'+i;
    row.className = 'row';
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.id = 'grid'+i*j;
        square.className = 'grid-member';
        row.appendChild(square);
    }
}
