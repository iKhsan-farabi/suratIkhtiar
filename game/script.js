const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(800, 1000);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    alert('Hai, nadif butuh bantuan anna nih');
    alert('Dirumahnya banyak tikus,total ada 5 tikus, tolong ya dipukul kalo nemu');
    alert('Nanti aku kasih hadiah deh wkwkw....');
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
    if (!e.isTrusted) return; //cheater
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
    console.log(score);
    if (score === 5) {
        alert('Yeay! Makasih ya Anna, aku kasih hadiahnya ya');
       window.location.href = 'https://drive.google.com/file/d/1r5nRlgeto2HZBWX3OfSTt3xSEKIz3EjC/view?usp=sharing';
    }
}

moles.forEach(mole => mole.addEventListener("click", bonk));