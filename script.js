let grid = document.querySelector('.grid');
grid.style.gridTemplateColumns = 'repeat(16, 1fr)' ;
grid.style.gridTemplateRows = 'repeat(16, 1fr)' ;

for(let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseenter', function(event){
        event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div);
};