// Para este proyecto decidi no utilizar variables, por lo tanto utilizare la funcion $ para llamar
// a los selectores. 
// Al no utilizar variables, comienzo con las funciones para luego continuar con los eventos.


// FUNCIONES

const $ = (selector) => document.querySelector(selector)


// EVENTOS


$("#btnImg").addEventListener("click", () =>{
    $("#bothSections").classList.toggle("hidden")
    $("#imgSection").classList.toggle("hidden")
})

$("#btnTxt").addEventListener("click", () =>{
    $("#bothSections").classList.toggle("hidden")
    $("#imgSection").classList.add("hidden")
    $("#txtSection").classList.toggle("hidden")
})








