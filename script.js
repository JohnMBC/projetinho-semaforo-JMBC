const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let IntervalId = null;

const signal = (event) => {
    stopAutomatic() ;
    turnOn[event.target.id]();

}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const statusColor = () => {
    const colors = ["red", "yellow", "green"]
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(IntervalId);
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => IntervalId = setInterval(statusColor, 1000)
}

buttons.addEventListener('click', signal);