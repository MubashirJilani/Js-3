let totalMarks = +prompt("Enter the total value:");
let obtainedMarks = +prompt("Enter the obtained value:");

totalMarks = Number(totalMarks);
obtainedMarks = Number(obtainedMarks);

let percentage = (obtainedMarks / totalMarks) * 100;

alert("The percentage is " + percentage + "%");