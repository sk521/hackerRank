let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = apples.filter(val => val + a >= s && val + a <= t).length;
  let orangeCount = oranges.filter(val => val + b >= s && val + b <= t).length;

  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
