function click1() {
  alert("you clicked!!");
}
//declaring the global message from var keyboard
var message2 = "This message is from var variable message2";

function click2() {
  let message1 = "This message is from let variable message1";
  alert(message1);
}

function click3() {
  alert(message2);
}
function click4() {
  let jp = 1000;
  let $ = 5;
  let _ = 5;
  // let let=8 not a defined variable as a reserved keyword

  alert("this is the sum of jp+$+_ =" + (jp + $ + _));
  /* num = 7; //can be used if we dont use 'use script'
  alert(num);
  console.log("clicked")
  */
}

function click5() {
  const constant_variable = 10000;
  const COLOR_ORANGE = "#FF7F00";
  alert("this is the value of constant variable" + constant_variable);
  let color = COLOR_ORANGE;
  alert(color); // #FF7F0
}

function click6() {
  let str = "Hello";
  let str2 = "Single quotes are ok too";
  let phrase = `can embed another ${str}`;
  alert(phrase);
  alert(str2);
}
function click7() {
  let isGreater = 4 > 1;
  let name = "jay";

  alert(isGreater); // true (the comparison result is yes
  alert(`${name} Prakash `); // remember to use the `` symbol and the $ symbol
}

// doing DOM manupulation from  here
function change() {
  // var paragraph1 = document.querySelector("#para1");
  // console.log(paragraph1);
  // var paragraph2 = document.querySelector("#para2");
  // console.log(paragraph2);
  // paragraph1.textContent = "I am changed by JavaScript!";
  // console.log(paragraph1);
  // paragraph2.textContent = "this is 2nd paragraph";
  // console.log(paragraph2);
  var h1 = document.querySelector("h1");
  h1.textContent = "Hello jay prakash";
  document.body.appendChild(h1);
  console.log(h1);
  h1.style.color = "white";
  h1.style.fontSize = "16px";
}

var inside_paragraph = document.getElementByClassNam("para1");
console.log(inside_paragraph);
// "use strict"
