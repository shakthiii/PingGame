'use strict';

//selecting elements==
let currentScore0El = document.querySelector('#current--0');
let currentScore1El = document.querySelector('#current--1');
let score = document.querySelectorAll('.score');
let holdUp = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');
let rollUp = document.querySelector('.btn--roll');
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score1El = document.querySelector('#score--1');
let score0El = document.querySelector('#score--0');

let current = 0;
let acitvePlayer = 0;
let scoreboard = [0, 0];
let playing = true;
//set 0 in html

score0El.textContent = 0;
score1El.textContent = 0;

//funciton swich player==>
function switchPlayer() {
  if (playing) {
    document.getElementById(`current--${acitvePlayer}`).textContent = 0;
    acitvePlayer = acitvePlayer === 0 ? 1 : 0;
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
    current = 0;
  }
}

let diceRoll = function () {
  if (playing) {
    let random = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice\dice-${random}.png`;
    document.querySelector('.dice').classList.remove('hidden');
    console.log(random);
    //condition
    if (random !== 1) {
      current = current + random;
      // currentScore.textContent = current;
      document.getElementById(`current--${acitvePlayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
  //
};

//diceRoll event==>

rollUp.addEventListener('click', diceRoll);

//text content==>

holdUp.addEventListener('click', function () {
  if (true) {
    scoreboard[acitvePlayer] = scoreboard[acitvePlayer] + current;
    document.getElementById(`score--${acitvePlayer}`).textContent =
      scoreboard[acitvePlayer];
    console.log(scoreboard[acitvePlayer], current);

    if (scoreboard[acitvePlayer] >= 100) {
      playing = false;
      console.log(`player${acitvePlayer} wins!`);
      // playerName.classList.toggle('player--winner');
      document
        .querySelector(`.player--${acitvePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${acitvePlayer}`)
        .classList.remove('player--active');
      document.querySelector('.dice').classList.add('hidden');
      // player1El.classList.toggle('player--winner .name');
    }
  }

  switchPlayer();
});

btnNew.addEventListener('click', function () {
  acitvePlayer = 0;
  playing = true;
  current = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.querySelector('.dice').classList.add('hidden');
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  scoreboard = [0, 0];
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
