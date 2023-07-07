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
// const player = {
//     name: "nico",
//     points : 10,
//     fat: true,
// };

// console.log(player); //출력: {name: 'nico', points: 10, fat: true}
// console.log(player.name); //하나의 property 출력
// console.log(player["name"]); //위와 같은 결과

// //property 업데이트 가능.
// player.fat = false;
// player.points+=15;
// console.log(player);

// //아래에서 바로 신규 property 추가할 수 있음.
// player.lastName="potato";
// console.log(player);



// //#2.7 Functions part One
// //fucntion, argument, parameter
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I am "+ age + ".");
// }
// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// //#2.8 Functions part Two
// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }
// function divide(a, b){
//     console.log(a / b);
// }
// plus(60, 8);
// divide(98); //NaN(Not A Number): 연산과정에서 잘못된 입력으로 인해 계산을 할 수 없음을 나타냄

// const player = {
//     name: "nico",
//     sayHello: function(personName){
//         console.log("hello "+ personName + "!");
//     }
// };

// console.log(player.name);
// player.sayHello("lynn");



// //#2.9 Recap 1
// //#2.10 Recap 2
// //#2.11 Returns 
// //#2.12 Recap
// const calculator = {
//     add: function (a, b) {
//         //console.log(a + b);
//         return a + b;
//         //return에서 반환되므로 return 밑으로 쓰는 코드는 실행 안됨 
//     },

//     subtract: function (a, b) {
//         //console.log(a - b);
//         return a - b;
//     },

//     multiply: function (a, b) {
//         //console.log(a * b);
//         return a * b;
//     },

//     divide: function (a, b) {
//         //console.log(a / b);
//         return a / b;
//     },

//     square: function (a, b) {
//         //console.log(a ** b);
//         return a ** b;
//     },
// };

// let result = calculator.add(10, 2);  //12
// console.log(result);
// result = calculator.subtract(10, 2); //8
// console.log(result);
// result = calculator.multiply(10, 2); //20
// console.log(result);
// result = calculator.divide(10, 2);   //5
// console.log(result);
// result = calculator.square(10, 2);   //100
// console.log(result);



// //#2.13 Conditionals
// const age = prompt("How old are you?"); //사용자에게 특수한 값을 받는다
// //기본적으로 age에 들어가는 타입은 String임
// //어떻게 String을 int로 바꿀까? parseInt() 사용!
// console.log(age, parseInt(age)); //전자는 String이고 후자는 Int
// //이렇게 하면, age로 문자가 입력되었을 때 정수로 변환 불가능하여 parseInt(age)가 NaN이라고 뜸(Number형 여부 확인에 용이)

// const age2 = parseInt(prompt("Write a number."));
// console.log(age2);

// //++추가로 찾아본 내용: 자바스크립트의 기본 창
// alert("This is alert!"); //확인 버튼 존재
// confirm("This is confirm?"); //확인, 취소 버튼 존재
// prompt("This is prompt"); //값을 입력하는 공간과 확인, 취소 버튼 존재



//#2.14 Conditionals part Two 
//#2.15 Conditionals part Three 
const age = parseInt(prompt("How old are you?"));

//Number 입력 안했을 시
if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age >= 18 && age <= 50) {
    console.log("You should exercise");
} else if (age === 100) {
    console.log("Wow you are wise!");
} else if (age > 80) {
    console.log("You can do whatever you want");
} else {
    console.log("ERROR");
}

//++추가로 찾아본 내용: '=='와 '==='
//'=='는 동치 연산자로 두 '값'이 동일한 경우 true를 리턴한다. 두 입력값의 타입이 같지 않은 경우 형변환하여 비교한다.
//'==='는 "타입까지 비교하는" 동치 연산자. 두 값이 동일하고 타입까지 일치하는 경우에만 true를 리턴.

