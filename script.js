
let reset = document.querySelector('.reset-btn');
let grid = document.querySelector('.grid');

reset.addEventListener('click', function() {
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    createGrid(sliderValue.value);
})

let sliderValue = document.querySelector('#slider');
let sliderText  = document.querySelector('.slider-value');

sliderValue.addEventListener('input', function(){
    sliderText.textContent = this.value;
    size = this.value;
    createGrid(size);
})

function createGrid(size) {

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

createGrid(16);