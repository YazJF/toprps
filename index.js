let playerScore = 0;
let compScore = 0;
let round = 0;

const getComputerChoice = () => {
    const rps = ['rock', 'paper', 'scissor'];
    const ranNum = Math.floor(Math.random() * 3);
    return rps[ranNum];
};

const rpsCalc = (player, comp) => {
    // Testing
    // console.log('computer = ' + comp + ' || ' + 'player = ' + player);
    let result;
    if (comp === player) {
        result = 'Draw';
        //comp rock calculations
    } else if (comp === 'rock' && player === 'scissor') {
        result = 'Loss';
    } else if (comp === 'rock' && player === 'paper') {
        result = 'Win';
        //comp paper calculations
    } else if (comp === 'paper' && player === 'scissor') {
        result = 'Win';
    } else if (comp === 'paper' && player === 'rock') {
        result = 'Loss';
        // comp Scissor calculations
    } else if (comp === 'scissor' && player === 'paper') {
        result = 'Loss';
    } else if (comp === 'scissor' && player === 'rock') {
        result = 'Win';
    } else {
        console.log('Error');
    }

    return result;
};

const gameEnd = (result) => {
    compScore = 0;
    playerScore = 0;
    round = 0;
    document.getElementById('playerScore').innerHTML = `Your Score: `;
    document.getElementById('computerScore').innerHTML = `Computers Score: `;
    document.getElementById('round').innerHTML = `Round: `;
    document.getElementById('result').innerHTML = `You ${result}`;
};

window.onload = () => {
    document.getElementById('rock').addEventListener('click', game);
    document.getElementById('scissor').addEventListener('click', game);
    document.getElementById('paper').addEventListener('click', game);
};

const game = (choice) => {
    const player = choice.currentTarget.id;
    const compChoice = getComputerChoice();
    const result = rpsCalc(player, compChoice);

    if (result === 'Win') {
        playerScore++;
        round++;
    } else if (result === 'Loss') {
        compScore++;
        round++;
    } else {
        round++;
    }

    console.log(result);

    document.getElementById(
        'playerScore'
    ).innerHTML = `Your Score: ${playerScore}`;
    document.getElementById(
        'computerScore'
    ).innerHTML = `Computers Score: ${compScore}`;
    document.getElementById('round').innerHTML = `Round: ${round}`;

    document.getElementById('result').innerHTML = `Round: ${result}`;

    if (playerScore === 4 && compScore < playerScore) {
        gameEnd('Won');
    } else if (compScore === 4 && playerScore < compScore) {
        compScore = 0;
        playerScore = 0;
        gameEnd('Lost');
    }
};
