// Para este proyecto decidi no utilizar variables, por lo tanto utilizare la funcion $ para llamar
// a los selectores. 
// Al no utilizar variables, comienzo con las funciones para luego continuar con los eventos.


// FUNCIONES

const $ = (selector) => document.querySelector(selector)


// EVENTOS

// BTN PANEL IMG
$("#btnImg").addEventListener("click", () =>{
  $("#imgSection").classList.toggle("hidden")
});

//BTN PANEL TEXT
$("#btnTxt").addEventListener("click", () =>{
  $("#txtSection").classList.toggle("hidden")
});

// BTN CERRAR PANEL IMG
$("#btnCloseSectionImg").addEventListener("click", () => {
    $("#imgSection").classList.add("hidden");
  });

//BTN CERRAR PANEL TEXT  
$("#btnCloseSectionTxt").addEventListener("click", () => {
    $("#txtSection").classList.add("hidden");
  });

//URL IMG
$("#urlImg").addEventListener("input", (e) =>{
  $("#memeImg").style.backgroundImage = `url(${e.target.value})`
});   

//FONDO
$("#colorBackgroundImg").addEventListener("input", (e) =>{
  $("#memeImg").style.backgroundColor = e.target.value
  $("#colorBackgroundImgText").innerText = e.target.value
});

//SELECT BLEND MODE
$("#modeOptions").addEventListener("input", (e) =>{
  $("#memeImg").style.backgroundBlendMode = e.target.value
});








