function generateNumber(limit = 100) {
  // generate a random integer(hint : Math.random)
  let randomNumber = Math.random() * 100;
  randomNumber = Math.floor(randomNumber);
  const numberdiv = document.getElementById('number');
  numberdiv.textContent = randomNumber;
  let res = checkOddEven(randomNumber);
  document.getElementById('odd-even').textContent = res;
}

function checkOddEven(num) {
  // logic for even / odd
  return num % 2 === 0 ? 'Even' : 'Odd'
}

window.onload = function () {
  // add event listeners to the button here
  const generateNumberdiv = document.getElementById('generate-number');
  generateNumberdiv.addEventListener('click', generateNumber);
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
