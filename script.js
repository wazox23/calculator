let display = document.querySelector(".display")

let buttons = document.querySelectorAll("button")


    
buttons.forEach(button => {  
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "AC":
                display.innerText = "";
                break
            case "←":
                display.innerText = display.innerText.slice(0, -1)
                break
            case "=":
                display.innerText = eval(display.innerText);
                break  
            default:
                display.innerText += e.target.innerText
        }
    });
});