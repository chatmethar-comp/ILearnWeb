const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2'),
}

const resetbtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

const resetsc = () => {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.button.disabled = false;
        p.display.classList.remove('winner');
        p.display.classList.remove('loser');
    }
};



winningScoreSelect.addEventListener('change', () => {
    resetsc();
    winningScore = +winningScoreSelect.value;
    isGameOver = false;
})

const addscore = (player, opponent) => {
    if (player.score !== winningScore && !isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
    }
    if (player.score === winningScore) {
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
        isGameOver = true;
    }
};

p1.button.addEventListener('click', () => addscore(p1, p2))
p2.button.addEventListener('click', () => addscore(p2, p1))
resetbtn.addEventListener('click', resetsc);

