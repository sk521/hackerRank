function gradingStudents(grades) {
  return grades.map((grade) => {
    return (grade >= 38 && (grade % 5 >= 3) ? grade + 5 - (grade % 5) : grade);
  })
}

console.log(gradingStudents([42,55,67]));
console.log(gradingStudents([4, 73, 67, 38, 33]));

/*
line 3: checks grade to see if its greater than or equal to 38
then use modulo to check if its difference is greater than or equal to 3
*/
