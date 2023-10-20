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
  //DOM getElementById  ----Example
  var paragraph_heading = document.getElementById("heading");
  paragraph_heading.style.fontSize = "3rem";
  paragraph_heading.innerHTML = "<b>This is the new data after DOM </b>";
  paragraph_heading.style.color = "red";
}
//DOM getElementByClassName ---Example
function paragraph() {
  var list_items = document.getElementsByClassName("list ");
  for (var i = 0; i < list_items.length; i++) {
    list_items[i].innerHTML = "<em>Now this is changed line.</em>";
    list_items[i].style.fontSize = "1.3rem";
    list_items[i].style.color = "orange";
  }

  var paragraph_heading = document.getElementById("heading");
  paragraph_heading.style.fontSize = "3rem";
  paragraph_heading.innerHTML = "<b>Again Changed</b>";
  paragraph_heading.style.color = "cyan";
}

//DOM getElementByTagName ---Example
function tag() {
  var tag_Dom = document.getElementsByTagName("h3");

  for (var i = 0; i < tag_Dom.length; i++) {
    tag_Dom[i].innerHTML = "<b>hello ji, done by tagname</b>";
    tag_Dom[i].style.color = "green";
  }
}
// "use strict"
