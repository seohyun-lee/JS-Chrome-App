// //#3.1 HTML in Javascript 
// const title = document.getElementById("title");
// console.log(title);         //<h1 class="hello" id="title">Grab me!</h1>
// console.dir(title);         //h1#title.hello 열어볼 수 있다
// title.innerText ="Got You!";
// console.log(title.id);       //title
// console.log(title.className);//hello



// //#3.2 Searching For Elements

// //getElementById()는 하나의 element 반환 (단점: 하위요소 못 가져옴)
// const title = document.getElementById("title");
// console.log(title); 

// //getElementsByClassName()는 Array를 반환
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// //getElementsByTagName()도 Array를 반환.
// const title2 = document.getElementsByTagName("h1");
// console.log(title2);


// //querySelector()는 element를 CSS selector방식으로 검색할 수 있음
// //.hello는 div의 class name을 쓴 것 (div h1 이렇게도 검색 가능)
// //찾았다면 <h1>...</h1>, 찾지 못했다면 null
// //querySelector()는 오직 첫번째 element 1개만 반환
// const title3 = document.querySelector(".hello h1");
// //document.querySelector(".hello h1:first-child");

// //querySelector()로 id전달, getElementById("hello")와 같음
// document.querySelector("#hello"); 
// console.log(title3);        //<h1>hello</h1>
// title3.innerText = "hello"; 

// //querySelectorAll()는 만약 Array 반환이 필요하다면(다 가져오고 싶다면) 사용
// const title4 = document.querySelectorAll(".hello h1");
// console.log(title4);

/* //index.HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"> <!--css 실행-->
    <title>Momentum App</title>
</head>
<body>
    <h1 class="hello" id="title">Grab me!</h1>
    <h1 class="hello">Grab me!</h1>
    <div class = "hello">
        <h1>Grab me 1!</h1>
    </div>
    <div class = "hello">
        <h1>Grab me 2!</h1>
    </div>
    <div class = "hello">
        <h1>Grab me 3!</h1>
    </div>
    <script src="app_ch3.js"></script>  <!--js 실행-->
</body>
</html>
*/



// //#3.3 Events
// const title = document.querySelector(".hello:first-child h1");
// console.log(title);
// console.dir(title);

// //click event를 배운다. title에 event listener를 추가하고, 유저가 뭔갈 하면 그 event들을 listen한 후 반응하는 것을 배운다
// function handleTitleClick(){
//     title.style.color = "blue";
//     console.log("title was clicked");
// }

// //addEventListener() 호출
// //"click": listen하고 싶은 event 이름(dlfm)
// //handleTitleClick: event가 발생하면 호출할 function
// title.addEventListener("click", handleTitleClick);



// //#3.4 Events part Two
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     h1.style.color = "blue";
// }
// function handleMouseEnter(){
//     h1.innerText = "mouse is here";
// }
// function handleMouseLeave(){
//     h1.innerText = "mouse is gone";
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);



// //#3.5 More Events
// //위의 코드를 이렇게 할 수도 있다
// //h1.onclick = handleTitleClick;
// //h1.onmouseenter= handleMouseEnter;
// //근데 addEventListener를 선호하는 이유는 나중에 removeEventListener로 제거할 수 있기 때문임

// //window에 대해 알아보자
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier");
// }

// function handleWindowOffline(){
//     alert("sos no wifi");
// }

// function handleWindowOnline(){
//     alert("yes wifi");
// }

// window.addEventListener("resize", handleWindowResize);
// //document.body, document.head는 콘솔에서 바로 호출 가능
// //그러나 그 안의 div같은것들은 querySelector로 호출해야 함
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);



