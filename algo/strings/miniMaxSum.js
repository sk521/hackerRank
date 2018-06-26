function miniMaxSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let min = sum - arr[0];
  let max = sum - arr[0];

  for (let j = 0; j < arr.length; j++) {
    let minMax = sum - arr[j];
    if (minMax < min) {
      min = minMax;
    } else if (minMax > max) {
      max = minMax;
    }
  }
  console.log(min, max);
}

miniMaxSum([1,2,3,4,5]);


/*
take the sum of all the elements in the array.
Then subtract the lowest and highest element in array to find max and min
*/
