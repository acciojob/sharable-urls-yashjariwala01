var nameInput = document.querySelector("#name");
var yearInput = document.querySelector("#year");
var form = document.querySelector("form");
var heading = document.querySelector("h3");

function submitFun(event){
    event.preventDefault();
    var headingValue = "https://localhost:8080/";
    var name = nameInput.value;
    var year = yearInput.value;
    
    if(name && year){
        headingValue += "?name=" + name + "&year=" + year;
    }else if(name){
        headingValue += "?name=" + name;
    }else if(year){
        headingValue += "?year=" + year;
    }
    
    heading.textContent=headingValue;
}

form.addEventListener("submit", submitFun);


