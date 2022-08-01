// objects {}
const car = {
  // key : value,
  //property
  name: "JUKE",
  brand: "NISSAN",
  color: "gold",
  safty: true,
  price: 21000,
  //methods
  beep: function () {
    console.log("boogh");
  },
  move: function () {
    console.log(this.name + " move");
  },
};
console.log(car["name"]);
car.name;
car["move"]();
car.move();

//list

const persons = {
  0: "mamad",
  1: "jafar",
  2: "kobra",
  3: "asghar",
  4: "aghdas",
  length: 5,
};
const humans = ["mmd", "jfr", "asgr", "aghdas"];
console.log(humans[0]);
window.console.log(window);

window.setInterval(function () {
  console.log("run");
}, 1000);

console.log(this);

function sayMyName(Name) {
  console.log(Name);
}
sayMyName("heisenberg");

const sayMyName = function (Name) {
  console.log(Name);
};
sayMyName("jessi pinkman");

const sayMyName = (Name) => {
  console.log(Name);
};
const sum = (a = 0, b = 0) => a + b;
console.log(sum(5, 10));
const sayMyName = (name) => name;

console.log(sayMyName("jessi pinkman"));
const fulName = "john doe";
const person = {
  fulName,
  sayMyName() {
    console.log(this.fulName);
  },
};
person.sayMyName();

const list = [10, 20, 30, 40, 50, 60];
console.log(list.pop());
console.log(list.push(70));
