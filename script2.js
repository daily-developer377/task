let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

var selectField = document.getElementById("selectField");
var selectFieldComp = document.getElementById("selectFieldComp");
var selectTextComp = document.getElementById("selectTextComp");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var listTwo = document.getElementById("listTwo");
var arrowIcon = document.getElementById("arrowIcon");
var arrowIconComp = document.getElementById("arrowIconComp");

// comp drop down


// var options = document.getElementsByClassName("options");





selectField.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}


// company drop down fun

selectFieldComp.onclick = function () {
    listTwo.classList.toggle("hidee");
    arrowIconComp.classList.toggle("rotate");
}
for (option of options) {
    option.onclick = function () {
        selectTextComp.innerHTML = this.textContent;
        listTwo.classList.toggle("hidee");
        arrowIconComp.classList.toggle("rotate");
    }
}