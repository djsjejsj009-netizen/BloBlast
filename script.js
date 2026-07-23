const grid = document.getElementById('grid');
const width = 8;
const squares = [];

// Создаем игровое поле 8x8
function createBoard() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.style.width = '35px';
        square.style.height = '35px';
        square.style.backgroundColor = '#222';
        square.style.border = '1px solid #444';
        square.style.borderRadius = '4px';
        grid.appendChild(square);
        squares.push(square);
    }
}

createBoard();

