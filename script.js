
let reset = document.querySelector('.reset-btn');
let grid = document.querySelector('.grid');
let color = 'black';
let rgbBtn = document.querySelector('.rgb-btn');
let blackBtn = document.querySelector('.black-btn');
let eraseBtn = document.querySelector('.erase-btn');
let isBtnClicked = false;

eraseBtn.addEventListener('click', function (){
    color = 'white';
    isBtnClicked = true;
});

blackBtn.addEventListener('click', function (){
    color = 'black';
    isBtnClicked = true;
});

function getRandomColor() {
    if (isBtnClicked === false){
        color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        return;
    }
};


rgbBtn.addEventListener('click', function() {
    isBtnClicked = false;
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event) {
            event.target.backgroundColor = getRandomColor();
        })
    }
});

let colorChoice = document.querySelector('#color');
colorChoice.addEventListener('input', function() {
    isBtnClicked = true;
    color = this.value;
});

reset.addEventListener('click', function() {
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    isBtnClicked = false;
    color = document.querySelector('#color').value;
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
            event.target.style.backgroundColor = `${color}`;
        })
        grid.appendChild(div);
    }
};

createGrid(16);