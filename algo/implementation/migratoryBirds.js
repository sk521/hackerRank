function migratoryBirds(arr) {
  let birds = {};
  let birdId = 0;
  let greatestBirdCount = 0;

  for (let id of arr) {
    if (birds[id] ? birds[id]++ : birds[id] = 1);
  }

  for (let key in birds) {
    if (birds[key] > greatestBirdCount) {
      greatestBirdCount = birds[key];
      birdId = key;
    }
  }

  return birdId;
}


console.log(migratoryBirds([1,4,4,4,5,3]));
