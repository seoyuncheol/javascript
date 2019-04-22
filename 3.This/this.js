var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function() {
    return this.first + this.second;
  }
};

function Person() {
  this.name = "kim";
  this.first = 10;
  this.second = 20;
  this.sum = function() {
    return this.first + this.second;
  };
}

var kim = new Person();

// console.log(kim.sum(kim.first, kim.second));
console.log(kim.sum());
