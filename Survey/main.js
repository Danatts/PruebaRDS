const maxScore = 50;
let results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function takeValue(id) {
  let [questionNum, value] = id.match(/\d+/g);
  results[questionNum - 1] = Number(value);
  updateProgressBar(getProgress(results));
}

function sumValues(arrayValues) {
  return arrayValues.reduce((a, b) => a + b);
}

function toPercent(value, total) {
  const percentage = (value / total) * 100
  return percentage.toFixed();
}

function getLevel(percent) {
  if (percent <= 30) return 'Basic'
  if (percent <= 70) return 'Intermediate'
  return 'Advance'
}

function getProgress(arrayValues) {
  return arrayValues.filter((e) => e !== 0).length / 10;
}

function updateProgressBar(progress) {
  document.getElementById("progress-bar--fill").style["width"] = `calc(15rem * ${progress})`
}

function displayResult() {
  if (results.every((e) => e !== 0)){
    document.getElementById("final-message").innerHTML = `Thank you!`;
    const score = toPercent(sumValues(results), maxScore);
    document.getElementById("score").innerHTML = `Your score is ${score}%`;
    const level = getLevel(score);
    document.getElementById("level").innerHTML = `You are a <strong>${level} Level User</strong>`;
  }
}

function main(id) {
  takeValue(id);
  displayResult();
}
