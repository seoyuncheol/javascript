// javascript = protype based language(프로토타입 기반 언어)

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.ear = 2;
  this.nose = 1;
  this.greet = function() {
    return `Hello I'm ${this.name}.`;
  };
}

var kim = new Person("kim", 20);
var lee = new Person("lee", 25);

console.log(kim);
console.log(lee);

// 객체가 생성될때마다 공통적인 변수와, 함수가 반복된다 => 메모리 낭비

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.ear = 2;
Person.prototype.nose = 1;
Person.prototype.greet = function() {
  return `Hello I'm ${this.name}.`;
};

var kim = new Person("kim", 20);
var lee = new Person("lee", 25);

// 만약 kim의  greet만 다르게 동작하게 하고 싶을 때,
kim.greet = function() {
  return `Hi, I'm ${this.name}.`;
};

console.log(kim.greet());
