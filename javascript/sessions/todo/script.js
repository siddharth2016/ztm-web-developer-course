// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function() {
//     console.log("Clicked!");
// });

// button.addEventListener("mouseenter", function() {
//     console.log("Mouse Entered, waiting for something!");
// });

// button.addEventListener("mouseleave", function() {
//     console.log("Mouse Left!");
// });

var input = document.getElementById("user-input");
var button = document.getElementById("add-item");
var todoList = document.querySelector("ul");

function isValidInput() {
    return input.value.length > 0;
}

function toggleItemStatus(event) {
    event.target.classList.toggle("done");
}

function addItem() {
    var listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.appendChild(document.createTextNode(input.value));
    listItem.addEventListener("click", toggleItemStatus);
    todoList.appendChild(listItem);
    input.value = "";
}

function addItemOnAClick() {
    if(isValidInput()) {
        addItem();
    }
}

function addItemOnAKeyPress(event) {
    if(isValidInput() && event.which === 13) {
        addItem();
    }
}

input.addEventListener("keypress", addItemOnAKeyPress);
button.addEventListener("click", addItemOnAClick);

