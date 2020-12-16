const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const rainbowButton = document.querySelector('.rainbow');
const cats = document.querySelector('.cats');
const buttons = document.querySelectorAll('.buttons');
let rainbowClicked = false;

let squares = [];
let size = 20; //promptGridSize();
//console.log(size);
makeGrid(size);


function promptGridSize() {
    return prompt("choose grid size 'X by X': ")
}

function makeGrid(dim) {
    container.setAttribute('style', `grid-template-columns: repeat(${dim}, 1fr); grid-template-rows: repeat(${dim}, 1fr)`);
    for (let i = 0; i < dim * dim; i++) {
        squares[i] = document.createElement('div'); 
        //squares[i].textContent=`${i}`;
        container.appendChild(squares[i]);
        squares[i].addEventListener('mouseover', () => {
            squares[i].setAttribute('style','background-color: black');
        });
    }
}

//make every square become a cat
cats.addEventListener('mousedown', () => {
    let ans = prompt("New Grid Size... (int between 1 and 100)");
    console.log(ans);
    console.log(typeof(ans));
    if (ans == null) {
        for (let i = 0; i < size * size; i++) {
            squares[i].addEventListener('mouseover', () => {
                squares[i].setAttribute('style','background: url("https://i.pinimg.com/originals/7b/cf/a9/7bcfa90fae6e8227f0664a503fb4bc08.jpg"); background-size: cover');
            });
        }
    }
    else {
        ans = parseInt(ans);
        for (let i=0; i < size * size; i++){
            squares[i].remove();
        }
        makeGrid(ans);
        for (let i = 0; i < ans * ans; i++) {
            squares[i].addEventListener('mouseover', () => {
                squares[i].setAttribute('style','background: url("https://i.pinimg.com/originals/7b/cf/a9/7bcfa90fae6e8227f0664a503fb4bc08.jpg"); background-size: cover');
            });
        }
    size = ans;
    }
});
//squares[50].setAttribute('style', `background: url("https://i.pinimg.com/originals/7b/cf/a9/7bcfa90fae6e8227f0664a503fb4bc08.jpg"); background-size: cover; grid-area: ${1}/${Math.ceil(size/12)}/${Math.round(size/12)}/${2 * Math.ceil(size/12)}`);

rainbowButton.addEventListener('mousedown', () => {
    for (let i = 0; i < size * size; i++) {
        squares[i].addEventListener('mouseover', () => {
            squares[i].setAttribute('style', `background-color: hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`);
            
        })
    } 
})

resetButton.addEventListener('click', () => {
    console.log(squares[5].attributes);
    for (let i = 0; i < size * size; i++) {
        //squares[i].classList.remove('touched');
        //squares[i].classList.remove('makePurple');
        squares[i].removeAttribute('style', 'background');
    }
    console.log(squares[5].attributes);
});

function test(e) {
    console.log(e.target.dataset.backgroundColor);
}
rainbowButton.addEventListener('click', test);

function assignBackground(event) {
    switch(event.target.dataset.color) {
        case 'black':
            
    }
}


buttons.forEach
