// Para este proyecto decidi no utilizar variables, por lo tanto utilizare la funcion $ para llamar
// a los selectores. 
// Al no utilizar variables, comienzo con las funciones para luego continuar con los eventos.


// FUNCIONES

const $ = (selector) => document.querySelector(selector)


// EVENTOS


$("#btnImg").addEventListener("click", () =>{
    $("#bothSections").classList.remove("hidden")
    $("#txtSection").style.display = "none"
})

$("#btnTxt").addEventListener("click", () =>{
    $("#bothSections").classList.remove("hidden")
    $("#imgSection").style.display = "none"
    $("#txtSection").style.display = "block"
})











