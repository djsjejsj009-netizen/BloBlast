const grid = document.getElementById('grid');
const width = 8;
const squares = [];

function createBoard() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Сделаем случайные блоки заполненными для красоты
        if (Math.random() > 0.5) {
            square.classList.add('filled');
        }

        square.addEventListener('click', () => {
            square.classList.toggle('filled');
        });

        grid.appendChild(square);
        squares.push(square);
    }
}

createBoard();
