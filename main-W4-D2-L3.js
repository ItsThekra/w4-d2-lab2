let arr = ["Ahmed", "Sara", "Ali" , "Noor", "Omar" , "Lana" , "ali" , "ahmed" , "reema" , "Rama"]

let names = arr.filter(name => name.toUpperCase().startsWith('A'));
console.log("Names that start with A or a : ", names);

console.log("==========")

let numberOfNames = arr.filter(name => name.length > 4);
console.log("The names more than 4 letter ", numberOfNames);


console.log("==========")

let newArr = arr.map(name => name.toUpperCase())
console.log(newArr)

console.log("==========")

let search = arr.find(name => name.toUpperCase().startsWith('R'));
console.log(search)

console.log("==========")

let sorted_arr = arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(sorted_arr);
console.log("==========")

let OmarName= arr.some(name => name == "Omar");
console.log(OmarName);

console.log("==========")

let students = arr.reduce((total ,name ) => 
         total + name.length ,0);
    console.log(students)

console.log("==========")

let evenNames = arr.filter(name => name.length % 2 === 0);

console.log(evenNames)

console.log("==========")

let  reversedNames = arr.map(name => name.split('').reverse().join(' '));
console.log("Reversed names:", reversedNames);

console.log("==========")
let namesWithOLetter = arr.filter(name => !name.includes('O'));

console.log(arr)
console.log(namesWithOLetter)

console.log("==========")

//  New Array:
let studentsGrades = [
    ["Ali", [85, 90, 78]],
    ["Sara", [88, 91, 85]],
    ["Ahmed", [72, 80, 95]],
    ["Lana", [80, 85, 88]],
    ["Omar", [70, 75, 80]],
    ["Noor", [92, 89, 88]]
  ];
  
    let Averages = studentsGrades.map(([name, grades]) => {
    let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    return { name, average };
  });
  console.log("Students with averages:", Averages);
  
  let Above80 = Averages.filter(student => student.average > 80);
  console.log("Students with average above 80:", Above80);
  