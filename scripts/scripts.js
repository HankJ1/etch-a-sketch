const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const userInput = document.querySelector('.textBox');
const rainbowButton = document.querySelector('.rainbow');
const cats = document.querySelector('.cats');
const buttons = document.querySelectorAll('.buttons');

window.onload = function() {
    console.log("triggered");
    const vinci = document.querySelector('.trialBG');
    //vinci.setAttribute('style', 'z-index: -5');
    vinci.classList.add('index');
    // body.setAttribute('style', `background: url("https://s.abcnews.com/images/International/Leonardo-da-vinci-file-gty-ml-190502_hpMain_1x1_992.jpg")`);
    // body.classList.add('bigDavinci');
    // body.classList.remove('bigDavinci');
    // // body.classList.remove('bigDavinci');
    // body.classList.add('normalDavinci');

}

let squares = [];
let size = 20;

//creates initial grid and sets the initial color to black
makeGrid(size);
setBackground('background-color: black')

//uses the color type obtained from newColor function and places the necessary style information in the setBackground function
function activateButtons() {
    bG = this.dataset.color;
    console.log(bG);
    setBackground(newColor(bG));
}

//takes dataset.color input from buttons and returns the associated background style
function newColor(color) {
    switch (color) {
        case 'black':
            return 'background-color: black';
            break;
        case 'clear':
            removeBackground();
            break;
        case 'rainbow':
            randomColor();
            return 'rainbow';
            break;
        case 'cats':
            return 'background: url("https://i.pinimg.com/originals/7b/cf/a9/7bcfa90fae6e8227f0664a503fb4bc08.jpg"); background-size: cover';
            break;
        case 'white':
            return 'background-color: white'
            break;
        default:
            return 'background-color: black';
            break;
    }
}

function deleteGrid () {
    for (let i = 0; i < size * size; i++) {
        squares[i].remove();
    }
}

function resize () {
    console.log(userInput.value);
    let input = userInput.value;
    if (input >= 1 && input <= 100) {
        deleteGrid();
        size = Math.round(input);
        makeGrid(size);
        setBackground('background-color: black');
    } else {
        alert("invalid input");
    }
}

//removes all colors from pixels
function removeBackground() {
    for (let i = 0; i < size * size; i++) {
        squares[i].removeAttribute('style', 'background');
    }
}

//set rainbow colors due to limitations with setBackground function
function randomColor () {
    for (let i = 0; i < size * size; i++) {
        squares[i].addEventListener('mouseover', () => {
            squares[i].setAttribute('style', `background-color: hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`);
        })
    }
}

//set background style based on clicked button dataset.color
function setBackground(styles) {
    if (styles == "rainbow") {
        console.log('rainbow');
        return 'rainbow';
    } 
    for (let i = 0; i < size * size; i++){
        squares[i].addEventListener('mouseover', () => {
            squares[i].setAttribute('style', `${styles}`);
        })
    }
}

//create initial grid of pixels
function makeGrid(dim) {
    container.setAttribute('style', `grid-template-columns: repeat(${dim}, 1fr); grid-template-rows: repeat(${dim}, 1fr)`);
    for (let i = 0; i < dim * dim; i++) {
        squares[i] = document.createElement('div'); 
        container.appendChild(squares[i]);
    }
}

//these two functions do the same thing
//buttons.forEach(button => button.addEventListener('click', activateButtons));
buttons.forEach(function(button) {
    button.addEventListener('click', activateButtons)
});









/*
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

*/
