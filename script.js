const container = document.getElementById('grid'); 
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clear');
const gridSizeInput = document.getElementById('gridSize');
const gridSizeValue = document.getElementById('gridSizeValue');

function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.style.border = '1px solid #ddd';
        cell.style.backgroundColor = '#fff';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = colorPicker.value;
        });
        container.appendChild(cell);
    }
}

clearButton.addEventListener('click', () => {
    const cells = container.querySelectorAll('div');
    cells.forEach(cell => cell.style.backgroundColor = '#fff');
});

gridSizeInput.addEventListener('input', () => {
    const size = gridSizeInput.value;
    gridSizeValue.textContent = size; 
    createGrid(size);
});

createGrid(gridSizeInput.value);