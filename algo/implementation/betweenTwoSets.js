function getTotalX(a, b) {
  let validInts = [];
  const minA = Math.min(...a);
  const minB = Math.min(...b);

  const isFactorOf = (arrItem, x) => x % arrItem === 0;
  const isFactorFor = (arrItem, x) => arrItem % x === 0;

  for (let i = minA; i <= minB; i++) {
    if (a.every(av => isFactorOf(av, i))) {
      if (b.every(av => isFactorFor(av, i))) {
        validInts.push(i);
      }
    }
  }

  return validInts.length;
}
