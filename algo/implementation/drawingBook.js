function pageCount(n, p) {
  if (n % 2 === 0) {
    if (p <= n / 2) {
      return Math.floor(p / 2);
    } else {
      return Math.ceil((n - p) / 2);
    }
  } else {
    if (p <= n / 2) {
      return Math.floor(p / 2);
    } else {
      return Math.floor((n - p) / 2);
    }
  }
}


// Tests
console.log(pageCount(6, 2));
// Output: 1

console.log(pageCount(5, 4));
// Output: 0
