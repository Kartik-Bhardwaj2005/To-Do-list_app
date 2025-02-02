let input = document.querySelector("form input");
let addBtn = document.querySelector("form button");
let toDoSec = document.querySelector(".to-do-sec");

addBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    if(input.value === ""){
        alert("Add some task");
    } else {
        let li = document.createElement("li");
        toDoSec.append(li);
        li.style.maxWidth = "100%";
        li.style.listStyleType = "none";
        li.style.marginBottom = "1rem";
        li.style.display = "flex";

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        li.prepend(checkbox);

        let label = document.createElement("label");
        li.append(label);
        label.innerText = input.value;
        label.style.margin = "0.5rem";
        label.style.width = "75%";

        let deleteBtn = document.createElement("button");
        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-trash");
        li.append(deleteBtn);
        deleteBtn.append(i);
        deleteBtn.style.width = "25%";
        deleteBtn.style.textAlign = "center";
        deleteBtn.style.border = "none";
        deleteBtn.style.fontSize = "1rem";
        deleteBtn.style.backgroundColor = "#ffffff";

        input.value = "";

        setData();
    }
});

toDoSec.addEventListener("click", (evt) => {
    if(evt.target.tagName === "BUTTON"){
        evt.target.parentNode.remove();
    } else if(evt.target.tagName === "I") {
        evt.target.parentNode.parentNode.remove();
    }
    setData();
});

toDoSec.addEventListener("click", (evt) => {
    if(evt.target.tagName === "INPUT"){
        if(evt.target.checked){
        evt.target.nextSibling.style.textDecoration = "line-through";
        evt.target.setAttribute("checked", "true");
        } else {
        evt.target.nextSibling.style.textDecoration = "none";
        evt.target.removeAttribute("checked");
        }
    }
    setData();
});

const setData = () => {
    localStorage.setItem("data", toDoSec.innerHTML);
}

const getData = () => {
    toDoSec.innerHTML = localStorage.getItem("data");
}
window.addEventListener("load", () => {
    getData();
});