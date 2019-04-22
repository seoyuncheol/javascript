// 객체의 기본적인 동작이 바뀌면 같은 취지의 객체는 모두 변화시켜줘야한다.

var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function() {
    return this.first + this.second;
  }
};

var lee = {
  name: "lee",
  first: 10,
  second: 10,
  sum: function() {
    return this.first + this.second;
  }
};

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

///////////////////////////////////////////////////////////////

var d1 = new Date("2019-04-22");
console.log("d1.getFullYear()", d1.getFullYear());
console.log(Date);

//  생성자(constructor) 함수: 객체를 만드는 함수
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function() {
    return this.first + this.second;
  };
}

var kim = new Person("kim", 10, 20);
var lee = new Person("lee", 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
