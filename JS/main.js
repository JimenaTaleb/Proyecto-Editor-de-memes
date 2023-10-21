// Para este proyecto decidi no utilizar variables, por lo tanto utilizare la funcion $ para llamar
// a los selectores. 
// Al no utilizar variables, comienzo con las funciones para luego continuar con los eventos.


// FUNCIONES

const $ = (selector) => document.querySelector(selector)


// EVENTOS


// $("#btnImg").addEventListener("click", () =>{
//     $("#bothSections").classList.remove("hidden")
//     $("#txtSection").style.display = "none"
// })

// $("#btnTxt").addEventListener("click", () =>{
//     $("#bothSections").classList.remove("hidden")
//     $("#imgSection").style.display = "none"
//     $("#txtSection").style.display = "block"
// })

// $("#btnCloseSectionImg").addEventListener("click", () => {
//     $("#bothSections").classList.add("hidden");
//   });

//   $("#btnCloseSectionTxt").addEventListener("click", () => {
//     $("#bothSections").classList.add("hidden");
//   });

// BTN PANEL IMG
$("#btnImg").addEventListener("click", () =>{
  $("#imgSection").classList.toggle("hidden")
})

//BTN PANEL TEXT
$("#btnTxt").addEventListener("click", () =>{
  $("#txtSection").classList.toggle("hidden")
})

// BTN CERRAR PANEL IMG
$("#btnCloseSectionImg").addEventListener("click", () => {
    $("#imgSection").classList.add("hidden");
  });

//BTN CERRAR PANEL TEXT  
$("#btnCloseSectionTxt").addEventListener("click", () => {
    $("#txtSection").classList.add("hidden");
  });








