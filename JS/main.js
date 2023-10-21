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

//MODO CLARO OSCURO BOTON
$("#btnTheme").addEventListener("click", () => {
  const currentTheme = $("body").getAttribute("data-theme")
  if (currentTheme) {
      $("body").removeAttribute("data-theme", "light--theme")
  } else {
      $("body").setAttribute("data-theme", "light--theme")
  }
  $("#lightbulb--off").classList.toggle("hidden")
  $("#lightbulb--on").classList.toggle("hidden")
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

// TEXTO SUPERIOR

$("#topTextArea").addEventListener("input", (e) =>{
  $("#topText").innerText = e.target.value
})

// TEXTO INFERIOR

$("#bottomTextArea").addEventListener("input", (e) =>{
  $("#bottomText").innerText = e.target.value
})

//SACAR TEXTO SUPERIOR 
$("#withoutTopText").addEventListener("input", (e) => {
  if (e.target.checked) {
      $("#topText").style.display = "none"
  } else {
      $("#topText").style.display = "block"
  }
})

// SACAR TEXTO INFERIOR

$("#withoutBottomText").addEventListener("input", (e) => {
  if (e.target.checked) {
      $("#bottomText").style.display = "none"
  } else {
      $("#bottomText").style.display = "block"
  }
})

// FUENTE
$("#fontFamilySelect").addEventListener("input", (e) =>{
  $("#topText").style.fontFamily = e.target.value
})

$("#fontFamilySelect").addEventListener("input", (e) =>{
  $("#bottomText").style.fontFamily = e.target.value
})

// TAMAÑO FUENTE

$("#fontSize").addEventListener("input" , (e) => {
  $("#topText").style.fontSize = `${e.target.value}px`
})

$("#fontSize").addEventListener("input" , (e) => {
  $("#bottomText").style.fontSize = `${e.target.value}px`
})

//JUSTIFICADO IZQUIERDA

$(".fa-align-left").addEventListener("click", () => {
  $("#topText").style.textAlign = "left"
})

$(".fa-align-left").addEventListener("click", () => {
  $("#bottomText").style.textAlign = "left"
})

//JUSTIFICADO CENTRO

$(".fa-align-center").addEventListener("click", () => {
  $("#topText").style.textAlign = "center"
})

$(".fa-align-center").addEventListener("click", () => {
  $("#bottomText").style.textAlign = "center"
})


//JUSTIFICADO DERECHA

$(".fa-align-right").addEventListener("click", () => {
  $("#topText").style.textAlign = "right"
})

$(".fa-align-right").addEventListener("click", () => {
  $("#bottomText").style.textAlign = "right"
})

//COLOR DE LA LETRA

$("#fontColor").addEventListener("input", (e) => {
  $("#topText").style.color = e.target.value
})

$("#fontColor").addEventListener("input", (e) => {
  $("#bottomText").style.color = e.target.value
})

//FONDO DEL TEXTO

$("#fontBackgroundColor").addEventListener("input", (e) => {
  $("#topText").style.backgroundColor = e.target.value
})

$("#fontBackgroundColor").addEventListener("input", (e) => {
  $("#bottomText").style.backgroundColor = e.target.value
})

//FONDO TRANSPARENTE DEL TEXTO

$("#transparentBackground").addEventListener("input", (e) => {
  if (e.target.checked) {
    $("#topText").style.backgroundColor = "transparent"
} else {
    $("#topText").style.backgroundColor = $("#fontBackgroundColor").value
}
})

$("#transparentBackground").addEventListener("input", (e) => {
  if (e.target.checked) {
    $("#bottomText").style.backgroundColor = "transparent"
} else {
    $("#bottomText").style.backgroundColor = $("#fontBackgroundColor").value
}
})

//ESPACIADO

$("#inputSpacing").addEventListener("input", (e) => {
  $("#topText").style.padding = `${e.target.value}px 30px`
})

$("#inputSpacing").addEventListener("input", (e) => {
  $("#bottomText").style.padding = `${e.target.value}px 30px`
})

//INTERLINEADO

$("#lineHeightSelect").addEventListener("input", (e) => {
  $("#topText").style.lineHeight = e.target.value
})

$("#lineHeightSelect").addEventListener("input", (e) => {
  $("#bottomText").style.lineHeight = e.target.value
})







