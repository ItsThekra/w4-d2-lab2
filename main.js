characters = [
    [
    "Luke Skywalker",
       177,
      "male",
      77,
    "brown",
    ],
    [
       "Leia Organa",
      160,
      "female",
       56,
       "blue",
    ],
    [
       "Han Solo",
      180,
      "male",
      80,
      "brown",
    ],
    [
       "Chewie",
      222,
      "male",
      190,
       "black",
    ],
    [
      "kevien",
      106,
       "male",
      32.2,
       "red",
    ],
  ];


// Map:
// by using arrow function
console.log("==== Map =====")
 let names = characters.map(character => character[0]);
 console.log(names)

 let heights = characters.map(height => height [1]);
 console.log(heights)

 console.log("==== REDUCE ====")
// REDUCE:
let totalHeight = characters.reduce((accumulator, character) => 
{
    return accumulator + character[1];  
  }, 0);  
console.log(totalHeight)

// FILTER
console.log(" ==== filter ==== ")

let characterslessthan200 = characters.filter(character => character[1] < 200);
console.log("Characters with height less than 200:", characterslessthan200);

let maleCharacters = characters.filter(character => character[2] === "male");
console.log("Male characters:", maleCharacters);


// Sort:
console.log("===== Sort ====")
// Sort - mass
let sortedByMass = characters.slice().sort((a, b) => a[3] - b[3]); 
console.log("Sorted by mass:", sortedByMass);

// Sort - height
let sortedByHeight = characters.slice().sort((a, b) => a[1] - b[1]); 
console.log("Sorted by height:", sortedByHeight);


// EVERY:
console.log("===== Every ====")
let massMoreThan40 = characters.every(character => character[3] > 40);
console.log("Does every character have mass more than 40?", massMoreThan40);

let shorterThan200 = characters.every(character => character[1] < 200);
console.log("Is every character shorter than 200?", shorterThan200);

// SOME:
console.log("===== Some ====")
let hasBlueEyes = characters.some(character => character[4] === "blue");
console.log("Is there at least one character with blue eyes?", hasBlueEyes);

let tallerThan210 = characters.some(character => character[1] > 210);
console.log("Is there at least one character taller than 210?", tallerThan210);