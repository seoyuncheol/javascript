// 아래의 객체의 단점 : 객체의 기본적인 동작이 바뀌면 같은 취지의 객체는 모두 변화시켜줘야한다.
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



// 객체지향의 의미에서 생성자 함수의 장점
// 객체를 선언을 모듈화 하여 재사용성을 높여준다.
// 수정에 용의하다


/*
 프로그램은 작고 단순한 것에서 크고 복잡한 것으로 진화한다. 그 과정에서 코드의 재사용성을 높이고, 유지보수를 쉽게 할 수 있는 다양한 기법들이 사용된다.
 그 중의 하나가 코드를 여러개의 파일로 분리하는 것이다. 이를 통해서 얻을 수 있는 효과는 아래와 같다.

 - 자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때마다 재활용할 수 있다.
 - 코드를 개선하면 이를 사용하는 있는 모든 애플리케이션의 동작이 개선된다.
 - 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
 - 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.
 - 한번 다운된 모듈은 웹브라우저에 의해서 저장되기 때문에 동일한 로직을 로드 할 때 시간과 네트워크 트래픽을 절약 할 수 있다.
*/
