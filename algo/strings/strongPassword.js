function minimumNumber(n, password) {
  let passwordCheck = [false, false, false, false];
  let splitPassword = password.split("");

  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";

  for (let i = 0; i < n; i++) {
    const ele = splitPassword[i];
    if (numbers.includes(ele)) passwordCheck[0] = true;
    if (lower_case.includes(ele)) passwordCheck[1] = true;
    if (upper_case.includes(ele)) passwordCheck[2] = true;
    if (special_characters.includes(ele)) passwordCheck[3] = true;

    if (passwordCheck.every((m) => m === true) && n >= 6) {
      return 0;
    }
  }

  const totalMinEle = passwordCheck.filter((n) => n === false);

  if (n < 6) {
    let missingEle = 6 - n;

    if (totalMinEle.length < missingEle) {
      return missingEle;
    }
  }

  return totalMinEle.length;
}

