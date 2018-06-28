let s = [2,2,1,3,2];
let d = 4;
let m = 2;

function solveBC(s, d, m) {
  let chocolateCount = 0;

  for (let i = 0; i < s.length; i++) {
    let sum = 0;

    for (let j = i; j < m + i; j += 1) {
      sum += s[j];
    }
    if (sum === d) {
      chocolateCount++;
    }
  }

  return chocolateCount;
}


console.log(solveBC(s,d,m));
