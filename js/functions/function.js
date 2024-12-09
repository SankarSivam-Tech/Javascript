// EXAMPLE 1

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 3));
console.log(sum(4, 5));
console.log(sum(5, 8));
console.log(sum(10, 5));

//EXAMPLE 2

function multiply(num1, num2) {
  console.log(num1);
  console.log(num2);

  if (num2 === undefined) {
    return num1;
  }

  return num1 * num2;
}
console.log(multiply(8, 2));

//EXAMPLE 3

console.log("sankarsivam@gmail.com.".slice(0, 11));

function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("sankarsivam@gmail.com"));
console.log(getUserNameFromEmail("sankarsiva@gmail.com"));
console.log(getUserNameFromEmail("veerasivam@gmail.com"));
console.log(getUserNameFromEmail("veerasankar@gmail.com"));
console.log(getUserNameFromEmail("sankarsivam96@gmail.com"));

//EXAMPLE 4

function toProperCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase('veera sankar'));

//EXAMPLE 5 (create variable instead of function)

const ProperCase=function(website){
    return website.charAt(0).toUpperCase() + website.slice(1).toLowerCase();
}
console.log(ProperCase('linkedin'));

//EXAMPLE 6 (create arrow function)

const PropCase=(project)=>{
    return project.charAt(0).toUpperCase() + project.slice(1).toLowerCase();
}
console.log(PropCase('javascript'));
