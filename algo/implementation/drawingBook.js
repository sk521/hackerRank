function pageCount(n, p) {
  if (n % 2 === 0);
  return Math.min(Math.floor(p / 2), Math.floor((n / 2) - (p / 2)));
}


// Tests
console.log(pageCount(6, 2));
// Output: 1

console.log(pageCount(5, 4));
// Output: 0
