document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const redCountElement = document.getElementById('red-count');
    const blueCountElement = document.getElementById('blue-count');
    let redCount = 0;
    let blueCount = 0;
    let selectedColor = 'red';

    document.getElementById('red-button').addEventListener('click', () => {
        selectedColor = 'red';
        colorNextEmptySquare();
    });

    document.getElementById('blue-button').addEventListener('click', () => {
        selectedColor = 'blue';
        colorNextEmptySquare();
    });

    function colorNextEmptySquare() {
        const squares = document.querySelectorAll('.square');
        for (const square of squares) {
            if (!square.classList.contains('red') && !square.classList.contains('blue')) {
                if (selectedColor === 'red') {
                    square.classList.add('red');
                    redCount++;
                } else if (selectedColor === 'blue') {
                    square.classList.add('blue');
                    blueCount++;
                }
                updateCounts();
                break;
            }
        }
    }

    for (let i = 0; i < 400; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => {
            if (square.classList.contains('red')) {
                square.classList.remove('red');
                redCount--;
            } else if (square.classList.contains('blue')) {
                square.classList.remove('blue');
                blueCount--;
            }
            updateCounts();
        });
        grid.appendChild(square);
    }

    function updateCounts() {
        redCountElement.textContent = redCount;
        blueCountElement.textContent = blueCount;
    }
});
