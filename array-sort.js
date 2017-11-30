var numbers = [10, 2, 5, 1, 9];

console.log(numbers);
numbers.sort(function(a,b){
  return a - b;
});

console.log(numbers);


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b){
  if(a.name < b.name){
    return -1;
  }
  if(a.name > b.name){
    return 1;
  }

  return 0;
});

console.log(students);
