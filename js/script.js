let elForm = document.querySelector(".form");
let elFormInput = document.getElementsByClassName("form-input");
let elList = document.querySelector(".list");

let newArray = [];

elForm.addEventListener("submit", function addInfo(e) {
    e.preventDefault();
    
    let elItem = document.createElement("li");
    elItem.setAttribute("class", "list-group-item  bg-info bg-opacity-25");
    elList.appendChild(elItem);
    
    let inputValue = elFormInput[0].value;
    newArray.push(inputValue);

    for(let item of newArray) {
        elItem.innerHTML = item;
    }
    elFormInput[0].value = "";


    
})
