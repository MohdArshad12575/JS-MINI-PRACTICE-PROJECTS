let displayOutput = document.querySelector(".display")
let expression = ""

let btn = document.querySelectorAll("button");

btn.forEach( (b) => {
    b.addEventListener("click", (e) => {
        let trackBtn = e.target.innerHTML
        if(trackBtn == "="){
            displayOutput.innerHTML = eval(expression)
            displayOutput.style.fontSize = "1.2rem";

        } else if(trackBtn == "AC") {
            expression = "";
            displayOutput.innerHTML = "0";
        } else if(trackBtn == "DEL") {
            expression = expression.substring(0,expression.length - 1);
            displayOutput.innerHTML = expression;
        } else {
            expression += trackBtn
            displayOutput.innerHTML = expression
        }
    })
})