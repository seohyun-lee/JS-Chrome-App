// //#2.0 Your First JS Project
//alert("hi"); //경고창 띄우기



// //#2.1 Basic Data Types
// console.log(54545454);
// console.log('lala');    //String은 홑따옴표 써도 되고 쌍따옴표 써도 됨
// console.log("lalalala");



// //#2.2 Variables 
// const a = 5; //const로 상수를 생성한다.
// const b = 5;
// const myName = "Gildong";
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log(myName+" Hong")
;


// //#2.3 const and let
// let userName = "user"; //let으로 변수를 생성한다.
// console.log(userName);
// userName = "SH";
// console.log(userName);
//  //기본적으로 const를 쓰고, 업데이트가 허용되어야 하는 경우에 let을 쓰자.



// //#2.4 Booleans
// const amIFat = false;
// console.log(amIFat);

// const a = null; //변수 안에 어떤 것이 없다는 것을 알려주고자 사용.
//  //변수가 존재하고, 값이 주어졌는데, 그 값이 "비어있음" 인 것!
// let something;  //undefined. 메모리 공간은 있는데 값이 아예 들어가지 않음.
//  //변수가 존재하고, 값이 주어지지 않음!



// //#2.5 Arrays
// //Array 요소는 타입이 상관없다.
// const nonsense = [1, 2, "hello", false, null, true, undefined, "me"];
// console.log(nonsense);

// //일주일 배열을 만들어보자
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// //Get Item from Array
// console.log(daysOfWeek);

// //Add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

//  //6번째 요소 출력 (index는 5여야 한다)
// console.log(daysOfWeek[5]);

// const toBuy = ["potato", "tomato"]
// toBuy.push("coke");
// console.log(toBuy[2]); //coke
// console.log(toBuy[3]); //undefined
// console.log(toBuy[999999999]); //undefined. 값이 존재하지 않음!



// //#2.6 Objects
const player = {
    name: "nico",
    points : 10,
    fat: true,
};

console.log(player); //출력: {name: 'nico', points: 10, fat: true}
console.log(player.name); //하나의 property 출력
console.log(player["name"]); //위와 같은 결과

//property 업데이트 가능.
player.fat = false;
player.points+=15;
console.log(player);

//아래에서 바로 신규 property 추가할 수 있음.
player.lastName="potato";
console.log(player);


