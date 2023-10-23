console.log("=--------this is an example of callback() in js=-------------------");

var First_name = "jay";
var Last_name = "Prakash";

// function 1-------------
function show_name(a, b) {
    console.log(`My name is ${a} ${b}`);
}

// function 2-------------------------
function show_details(c, d, callback) {
    console.log(`My first name is ${c}`);
    console.log(`My last name is ${d}`);
    callback(c, d);
}
//calling 2nd function and bassing the attributes also first function as an argument ------------------
show_details(First_name, Last_name, show_name);

//======================Nested callback in js====================================================
console.log("");
console.log("-------This output for nested callback---------------");

function function1(callback) {
    console.log("Task 1 executed..!.");
    callback();
}

function function2(callback) {
    console.log("Task 2 executed..!.");
    callback();
}

function function3(callback) {
    console.log("Task 3 executed..!.");
    callback();
}

function startTasks() {
    function1(function () {
        function2(function () {
            function3(function () {
                console.log("All tasks executed..!.");
            });
        });
    });
}

startTasks();

