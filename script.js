
let reset = document.querySelector('.reset-btn');

reset.addEventListener('click', function() {
    window.location.reload(true);
})

function createGrid(size) {

    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 2fr)` ;
    grid.style.gridTemplateRows = `repeat(${size}, 2fr)` ;
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());


    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseenter', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
};

createGrid(24);