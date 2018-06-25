function super_reduced_string(s) {
  let stack = [];
  let array = s.split('');
  stack.push(s[0])

  for (var i = 1; i < array.length; i++) {
    if (stack[stack.length - 1] == array[i]) {
      stack.pop();
    }
    else {
      stack.push(array[i]);
    }
  }

  if (stack.length == 0) {
    return "Empty String"
  } else {
    return stack.join('').replace(/,/g, '');
  }
}


console.log(super_reduced_string("aa"));
// output: EMPTY STRING;
// console.log(super_reduced_string("aaabccddd"));
// output: "abd"
// console.log(super_reduced_string("zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh"));



/*
  let stringCount = {};
  let reducedString = '';

  for (let letter of s) {
    if (stringCount[letter] ? stringCount[letter]++ : stringCount[letter] = 1);
    if (stringCount[letter] === 2) {
      stringCount[letter] = 0;
    }
  }

  for (let letter in stringCount) {
    if (stringCount[letter] === 1) {
      reducedString += letter;
    } else if (reducedString.length === 0) {
      return 'EMPTY STRING';
    }
  }
  return reducedString;
*/
