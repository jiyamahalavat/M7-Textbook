const body = document.body
console.log(body)

body.append("Hello world", "test test test")

const div = document.createElement("div");
body.append(div)

div.testContent = "Hello world";
div.innerText = "test test test";

div.innerHTML = "<b> hello bold world </b>"

document.createElement("em");

const strong = document.createElement("strong");
body.append(strong);
strong.innerText = "this is a strong tag";
strong.append(em);

const main = document.querySelector('div');
console.log(main);

console.log(main.style);
main.style.backgroundColor = "pink";

function changeColor(element, color) {
    element.style.backgroundColor = color
}

changeColor(main, "#e6237e00")

const grandparent = document.querySelector(".grandparent");
changeColor(grandparent, "pink");

console.log(grandparent.children);
const parents = Array.from(grandparents.children);
console.log(parents[0])
changeColor(parents[0], "blue");

const first_parent = parents[0];
const childrenOfFirstParent = Array.from(first_parent.children);

changeColor(childrenOfFirstParent[0],"red");
changeColor(first_parent.firstElementChild, "lavender");
