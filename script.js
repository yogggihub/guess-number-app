'use strict';
let userChance = 20;
let higherScore = 0;
const generateSecreteNumber = () => Math.trunc(Math.random() * 20);
let secreteNumber = generateSecreteNumber();
const displayMessage = function (selectedElement, elementValue) {
  document.querySelector(selectedElement).textContent = elementValue;
};
const getGuessNumber = function () {
  const guessNumber = +document.querySelector('.guess').value;
  if (guessNumber > 0) {
    // guess the number
    if (secreteNumber === guessNumber) {
      displayMessage('.number', secreteNumber);
      displayMessage('.message', 'You Win the Game');
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (userChance > higherScore) {
        higherScore = userChance;
        displayMessage('.highscore', higherScore);
      }
    } else {
      displayMessage(
        '.message',
        guessNumber > secreteNumber ? 'Number is Greater' : 'Number is Lower'
      );
      if (userChance) {
        userChance--;
        document.querySelector('.score').textContent = userChance;
      }
    }
  } else {
    alert('Please enter Number');
    return null;
  }
};

// reset the Data

const resetData = function () {
  userChance = 20;
  displayMessage('.message', 'Start guessing...');
  displayMessage('.score', userChance);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  secreteNumber = generateSecreteNumber();
};

document.querySelector('.check').addEventListener('click', getGuessNumber);
document.querySelector('.again').addEventListener('click', resetData);
