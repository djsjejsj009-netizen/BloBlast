const grid = document.getElementById('grid');
const scoreElement = document.getElementById('current-score');
const bestScoreElement = document.getElementById('best-score');
const width = 8;
const squares = [];

let score = 0;
let bestScore = localStorage.getItem('bloBlastBestScore') ? parseInt(localStorage.getItem('bloBlastBestScore')) : 0;

// Устанавливаем начальные значения на экране
bestScoreElement.textContent = bestScore;
scoreElement.textContent = score;

function createBoard() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        if (Math.random() > 0.5) {
            square.classList.add('filled');
        }

        square.addEventListener('click', () => {
            square.classList.toggle('filled');
            
            // Начисляем очки при клике
            if (square.classList.contains('filled')) {
                score += 10;
            } else {
                score = Math.max(0, score - 5);
            }
            
            scoreElement.textContent = score;

            // Проверяем и сохраняем новый рекорд
            if (score > bestScore) {
                bestScore = score;
                bestScoreElement.textContent = bestScore;
                localStorage.setItem('bloBlastBestScore', bestScore);
            }
        });

        grid.appendChild(square);
        squares.push(square);
    }
}

createBoard();
