console.log("Dinesh - app")

var click_console = function() {
    console.log("click it")
    scribble = document.getElementById("scribble")
    toggled = scribble.getAttribute("toggled")
    units = document.querySelector(".units__section")
    mains = document.querySelector(".units__main-module")
    // if flase then show scribble pad
    if(toggled == "false") {
        units.style.display = "none";
        mains.classList.add("width-50");
        console.log("!Toggle is "+ toggled)
        scribble.setAttribute("toggled", true)
    }else {
        units.style.display = "block";
        mains.classList.remove("width-50");
        console.log("Toggle is "+ toggled)
        scribble.setAttribute("toggled", false)
    }
    
}

function addButton() {
    var header_email = document.querySelector(".header__email")
    var button = document.createElement("button")
    button.textContent = "Scribble"
    button.id = "scribble"
    button.setAttribute("toggled", false)
    button.addEventListener("click", click_console, false);
    button.className = "button-scribble"
    header_email.insertBefore(button, header_email.firstChild)
}

addButton()