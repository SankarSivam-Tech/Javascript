// EXAMPLE 1

const myArray = [];

myArray[0] = "veera";
myArray[1] = "sankar";
myArray[2] = 15;
myArray[3] = true;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[2]);

//EXAMPLE 2: add & delete element to last one

myArray.push("Gravitorix");
console.log(myArray);

myArray.pop();
console.log(myArray);

//EXAMPLE 3:add &delete element to first one

myArray.unshift("javascript");
console.log(myArray);

myArray.shift();
console.log(myArray);

//EXAMPLE 4: delete respective position

myArray.splice(1, 2); // 1->start index (or) position, 2->no.of elements delete from start index

console.log(myArray);

//EXAMPLE 5: replace index element

myArray.splice(1, 1, false);

console.log(myArray);

//EXAMPLE 6:reverse the array elements

myArray.reverse();

console.log(myArray);

//EXAMPLE 7:join the multiple strings into same string

const newArray = myArray.join();

console.log(newArray);

//EXAMPLE 8:join the element to single array

const newArr = newArray.split(",");
console.log(newArr);

//EXAMPLE 9: NESTED ARRAY

myArrayA = ["today", "yesterday", "tomorrow"];

// const myArrayB=myArray.concat(myArrayA)

                // (or)

 const myArrayB=[...myArray,...myArrayA]               

console.log(myArrayB);

//EXAMPLE 10: 1D,2D,3D arrays

const option1=['frontend','backend','fullstack']  //1D

const option2=['AI','Data Analytics']

const option3=['earn','grow','give']



console.log(option1[1],option2[1]);

const option4=[option1,option2]          //2D

console.log(option4[0][1],option4[1][1]);

const option5=[option4]              //3D

console.log(option5[0][0][0]);





