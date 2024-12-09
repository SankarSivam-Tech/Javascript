// EXAMPLE 1

const myObj = { name: "veera sankar" };

console.log(myObj);
console.log(myObj.name);

// EXAMPLE 2

const object1 = {
  name: "gravitorix",
  age: 29,
  qualification: {
    school: 12,
    college: "degree",
  },
  job: ["frontend", "backend"],
  alive: true,
  action: function () {
    return `earn by learning ${this.job[0]},are you alive : ${this.alive}`;
  },
};

console.log(object1);
console.log(object1.name);
console.log(object1.qualification.college);
console.log(object1.job[1]);
console.log(object1.action());

// EXAMPLE 3

const vehicle = {
  name: "maruti",
  model: 2000,
  mileage: "20km",
  sound: function () {
    return "vrrroom";
  },
};

console.log(vehicle);
console.log(vehicle.sound());

const car = Object.create(vehicle);
car.wheels = 4; //create property
car.mileage = "15km"; //modify property

console.log(car);
console.log(car.wheels);

console.log(car.mileage);
console.log(car.model);

const tesla = Object.create(car);

console.log(tesla);
console.log(tesla.name);

// EXAMPLE 4

const movies = {
  actor: "vijay",
  md: "anirudh",
  director: "lokesh",
};
console.log(Object.keys(movies));

console.log(Object.values(movies));

delete movies.md;

console.log(movies);
console.log(movies.hasOwnProperty('md'));

// EXAMPLE 5: destructing the objects

const{actor,md,director}=movies
console.log(actor);

function music({director}){
    return director
}
console.log(music(movies));




