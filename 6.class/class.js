// EC6 에서 추가됌. EC6 이전 버전에선 작동되지
// class Person {}

// var kim = new Person();

// console.log("kim", kim);

////////////////////////////////////////////

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello I'm ${this.name}.`;
  }
}

var kim = new Person("kim", 28);

console.log("kim", kim);
console.log("Person", Person.greet());
