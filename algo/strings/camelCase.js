function camelcase(s) {
  let capitalLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (capitalLetters.indexOf(s[i]) !== -1) {
      count++;
    }
  }

  return count;


  /*
  one liner using regex
  return (s.split(/[A-Z]/).length);
  */
}

console.log(camelcase("saveChangesInTheEditor"));
