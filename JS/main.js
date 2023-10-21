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
  const brightness = $("#brightness").value
  const opacity = $("#opacity").value
  const contrast = $("#contrast").value
  const blur = $("#blur").value
  const grayscale = $("#grayscale").value
  const sepia = $("#sepia").value
  const hue = $("#hue").value
  const saturate = $("#saturate").value
  const invert = $("#invert").value
  $("#memeImg").style.filter = `brightness(${brightness}) opacity(${opacity}) contrast(${contrast}%) blur(${blur}px) grayscale(${grayscale}%) sepia(${sepia}%) hue-rotate(${hue}deg) saturate(${saturate}%) invert(${invert})`
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

filtersMeme()

//RESET DE FILTROS

$("#btnResetFilters").addEventListener("click", () =>{
  $("#brightness").value = "1"
  $("#opacity").value = "1"
  $("#contrast").value = "100"
  $("#blur").value = "0"
  $("#grayscale").value = "0"
  $("#sepia").value = "0"
  $("#hue").value = "0"
  $("#saturate").value = "100"
  $("#invert").value = "1"
  $("#memeImg").style.filter = "none"
})






