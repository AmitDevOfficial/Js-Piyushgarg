//--DOM--

const doc = document.querySelector("body");

doc.style.border = "1px solid black"
// doc.innerHTML = "<h1>Hey are you hacked..!</h1>"


const doc1 = document.querySelector("#navi")
doc1.innerText = "Hello Amit Vishwakarma";

const doc2 = document.querySelectorAll("div")
console.log(doc2)

const element = document.getElementsByClassName("block");
for (let index = 0; index < element.length; index++) {
    element.item(index).style.background = "red";
    element.item(index).style.color = "white";
}
console.log(element)


const elm = document.getElementById("myId");
elm.classList.remove("remove")