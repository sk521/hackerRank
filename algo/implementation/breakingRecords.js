function breakingRecords(scores) {
  let minScore = scores[0];
  let minScoreCount = 0;
  let maxScore = scores[0];
  let maxScoreCount = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < minScore) {
      minScore = scores[i];
      minScoreCount++;
    } else if (scores[i] > maxScore) {
      maxScore = scores[i];
      maxScoreCount++;
    }
  }
  return [maxScoreCount, minScoreCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
