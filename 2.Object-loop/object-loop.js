var memberArray = ["kim", "park", "seo"];

var i = 0;

while (i < memberArray.length) {
  console.log(memberArray[i]);
  i += 1;
}

// 객체 반복문
var memberObject = {
  manager: "kim",
  developer: "park",
  designer: "seo"
};

for (var name in memberObject) {
  console.log(`${name} ::> ${memberObject[name]}`);
}
