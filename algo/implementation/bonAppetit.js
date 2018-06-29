let arr = input.split("\n");
let k = arr[0].split(" ")[1];
let shared = arr[2];

let total = arr[1].split(" ");
total.splice(k, 1);

total = total.reduce((acc, cur) => acc += parseInt(cur), 0)

if (total / 2 == shared) {
  console.log('Bon Appetit');
} else {
  console.log(shared - total / 2);
}
