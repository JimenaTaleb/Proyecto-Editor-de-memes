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

//FILTROS

const filtersMeme = () =>{
  $("#memeImg").style.filter = `brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) sepia(${$("#sepia").value}%) hue(${$("#hue").value}deg) saturate(${$("#saturate").value}%) invert(${$("#invert").value})`
}

$("#brightness").addEventListener("input", filtersMeme)
$("#opacity").addEventListener("input", filtersMeme)
$("#contrast").addEventListener("input", filtersMeme)
$("#blur").addEventListener("input", filtersMeme)
$("#grayscale").addEventListener("input", filtersMeme)
$("#sepia").addEventListener("input", filtersMeme)
$("#hue").addEventListener("input", filtersMeme)
$("#saturate").addEventListener("input", filtersMeme)
$("#invert").addEventListener("input", filtersMeme)








