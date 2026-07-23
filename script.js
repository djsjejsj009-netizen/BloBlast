const grid = document.getElementById('grid');
const width = 8;
const squares = [];

const colors = [
    '#ff4757', // красный
    '#2ed573', // зеленый
    '#1e90ff', // синий
    '#ffa502', // оранжевый
    '#9b59b6'  // фиолетовый
];

function createBoard() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.style.width = '35px';
        square.style.height = '35px';
        square.style.border = '1px solid #444';
        square.style.borderRadius = '4px';

        // Закрашиваем каждую ячейку случайным цветом
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        square.style.backgroundColor = randomColor;

        // Клик по блоку делает его темным (эффект удаления)
        square.addEventListener('click', () => {
            square.style.backgroundColor = '#222';
        });

        grid.appendChild(square);
        squares.push(square);
    }
}

createBoard();
