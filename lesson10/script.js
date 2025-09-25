const department = [
  { name: "Person1", salary: 1000 },
  { name: "Person2", salary: 2000 },
  { name: "Person3", salary: 500 },
  { name: "Person4", salary: 3000 },
];

const salaries = [1000, 2000, 500, 500, 300, 400, 4000, 700];
// const sortedSalaries =

salaries.sort();

salaries;

salaries.sort((a, b) => a - b);

salaries;

department.sort((a, b) => a.salary - b.salary);

department;

console.log([3, 1, 2].toSorted());
