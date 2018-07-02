function sockMerchant(n, ar) {
  let sockHash = {};
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    let sockColor = ar[i];
    if (sockHash[sockColor] ? sockHash[sockColor]++ : sockHash[sockColor] = 1);

    if (sockHash[sockColor] === 2) {
      count++;
      sockHash[sockColor] = 0;
    }
  }
  return count;
}


console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
