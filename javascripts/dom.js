
// const randomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
const outputDiv = $('#insult-land');

const domString = (word1, word2, word3) => {
  let string = '';
  string += `${word1} ${word2} ${word3}`;
  printToDom(string);
};

const printToDom = (insult) => {
  outputDiv.html(insult);
};

module.exports = {
  domString,
};
