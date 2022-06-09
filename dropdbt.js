let dropdownHamburger = document.getElementById("services")
let show = document.getElementById("dropdown-hamburger")
let arrowdn = document.getElementById("arrowdn")
let arrowup = document.getElementById("arrowup")

dropdownHamburger.addEventListener ("click", function(event){
    if(show.style.display == "none"){
    show.style.display = "block"
    arrowdn.style.display ="block"
    arrowup.style.display ="none"
    }
    else{
        show.style.display = "none"
        arrowdn.style.display ="none"
        arrowup.style.display ="block"

    }

})