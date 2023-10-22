// Para este proyecto decidi no utilizar variables, por lo tanto utilizare la funcion $ para llamar
// a los selectores. 
// Al no utilizar variables, comienzo con las funciones para luego continuar con los eventos.


// FUNCIONES

//FUNCION $ PARA LLAMAR A LOS SELECTORES
const $ = (selector) => document.querySelector(selector)


//ABRIR PANEL DE EDICION DE IMAGEN
const openImgPanel = () =>{
  $("#imgSection").classList.toggle("hidden")
}

//ABRIR PANEL DE EDICION DE TEXTO
const openTextPanel = () =>{
  $("#txtSection").classList.toggle("hidden")
}

//CERRAR PANEL IMG
const closeImgPanel = () =>{
  $("#imgSection").classList.add("hidden");
}

//CERRAR PANEL TXT
const closeTextPanel = () =>{
  $("#txtSection").classList.add("hidden");
}

//CAMBIAR MODO CLARO-MODO OSCURO
const changeTheme = () =>{
  const currentTheme = $("body").getAttribute("data-theme")
  if (currentTheme) {
      $("body").removeAttribute("data-theme", "light--theme")
  } else {
      $("body").setAttribute("data-theme", "light--theme")
  }
  $("#lightbulb--off").classList.toggle("hidden")
  $("#lightbulb--on").classList.toggle("hidden")
}

//INPUT URL IMAGEN
const inputUrlImg = (e) =>{
  $("#memeImg").style.backgroundImage = `url(${e.target.value})`
}

//CAMBIAR EL FONDO
const changeBackgroundColor = (e) =>{
  $("#memeImg").style.backgroundColor = e.target.value
  $("#colorBackgroundImgText").innerText = e.target.value
}

//BLEND MODE
const selectBlendMode = (e) =>{
  $("#memeImg").style.backgroundBlendMode = e.target.value
}

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

//RESET DE LOS FILTROS
const resetFiltersMeme = () =>{
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
}

//INPUT TEXTO SUPERIOR
const inputTopText = (e) =>{
  $("#topText").innerText = e.target.value
} 

//INPUT TEXTO INFERIOR
const inputBottomText = (e) =>{
  $("#bottomText").innerText = e.target.value
} 

//SIN TEXTO SUPERIOR
const withOutTopText = (e) =>{
  if (e.target.checked) {
    $("#topText").style.display = "none"
} else {
    $("#topText").style.display = "block"
}
}

//SIN TEXTO INFERIOR
const withOutBottomText = (e) =>{
  if (e.target.checked) {
    $("#bottomText").style.display = "none"
} else {
    $("#bottomText").style.display = "block"
}
}

//FUENTE
const selectedFontFamily = (e) =>{
  $("#topText").style.fontFamily = e.target.value
  $("#bottomText").style.fontFamily = e.target.value
}

//TAMAÑO FUENTE
const selectedFontSize = (e) =>{
  $("#topText").style.fontSize = `${e.target.value}px`
  $("#bottomText").style.fontSize = `${e.target.value}px`
}

//TEXTO JUSTIFICADO HACIA LA IZQUIERDA
const textAlignLeft = () =>{
  $("#topText").style.textAlign = "left"
  $("#bottomText").style.textAlign = "left"
}

//TEXTO JUSTIFICADO HACIA EL CENTRO
const textAlignCenter = () =>{
  $("#topText").style.textAlign = "center"
  $("#bottomText").style.textAlign = "center"
}
//TEXTO JUSTIFICADO HACIA LA DERECHA
const textAlignRight = () =>{
  $("#topText").style.textAlign = "right"
  $("#bottomText").style.textAlign = "right"
}

//COLOR DE LA FUENTE
const selectedFontColor = (e) =>{
  $("#topText").style.color = e.target.value
  $("#bottomText").style.color = e.target.value
}

//FONDO DE LA TIPOGRAFIA
const selectedFontBackgroundColor = (e) =>{
  $("#topText").style.backgroundColor = e.target.value
  $("#bottomText").style.backgroundColor = e.target.value
}

//FONDO TRANSPARENTE
const withOutFontBackground = (e) =>{
  if (e.target.checked) {
    $("#topText").style.backgroundColor = "transparent"
    $("#bottomText").style.backgroundColor = "transparent"
} else {
    $("#topText").style.backgroundColor = $("#fontBackgroundColor").value
    $("#bottomText").style.backgroundColor = $("#fontBackgroundColor").value
}
}

//ESPACIADO
const selectedSpacing = (e) =>{
  $("#topText").style.padding = `${e.target.value}px 30px`
  $("#bottomText").style.padding = `${e.target.value}px 30px`
}

//INETRLINEADO
const selectedLineHeight = (e) =>{
  $("#topText").style.lineHeight = e.target.value
  $("#bottomText").style.lineHeight = e.target.value
}

//SIN CONTORNO
const withOutTextShadow = () =>{
  $("#topText").style.webkitTextStroke = "transparent"
  $("#bottomText").style.webkitTextStroke = "transparent"
}

//CONTORNO CLARO
const lightTextShadow = () =>{
  $("#topText").style.webkitTextStroke = "1px white"
  $("#bottomText").style.webkitTextStroke = "1px white"
}

//CONTORNO OSCURO
const darkTextShadow = () =>{
  $("#topText").style.webkitTextStroke = "1px black"
  $("#bottomText").style.webkitTextStroke = "1px black"
}

//DESCARGAR MEME
const downloadMeme = () => {
  domtoimage.toBlob($(".meme--editor")).then((blob) => {
      saveAs(blob, "my-meme.png")
  })
}


// EVENTOS

// BTN PANEL IMG
$("#btnImg").addEventListener("click", openImgPanel)

//BTN PANEL TEXT
$("#btnTxt").addEventListener("click", openTextPanel)

// BTN CERRAR PANEL IMG
$("#btnCloseSectionImg").addEventListener("click", closeImgPanel)

//BTN CERRAR PANEL TEXT  
$("#btnCloseSectionTxt").addEventListener("click", closeTextPanel)
    
//MODO CLARO-OSCURO BOTON
$("#btnTheme").addEventListener("click", changeTheme)

//URL IMG
$("#urlImg").addEventListener("input", inputUrlImg)

//FONDO
$("#colorBackgroundImg").addEventListener("input", changeBackgroundColor)

//SELECT BLEND MODE
$("#modeOptions").addEventListener("input", selectBlendMode)

//FILTROS
$("#brightness").addEventListener("input", filtersMeme)
$("#opacity").addEventListener("input", filtersMeme)
$("#contrast").addEventListener("input", filtersMeme)
$("#blur").addEventListener("input", filtersMeme)
$("#grayscale").addEventListener("input", filtersMeme)
$("#sepia").addEventListener("input", filtersMeme)
$("#hue").addEventListener("input", filtersMeme)
$("#saturate").addEventListener("input", filtersMeme)
$("#invert").addEventListener("input", filtersMeme)

//RESET DE FILTROS
$("#btnResetFilters").addEventListener("click", resetFiltersMeme)

// TEXTO SUPERIOR
$("#topTextArea").addEventListener("input", inputTopText)

// TEXTO INFERIOR
$("#bottomTextArea").addEventListener("input", inputBottomText)

//SACAR TEXTO SUPERIOR 
$("#withoutTopText").addEventListener("input", withOutTopText)

// SACAR TEXTO INFERIOR
$("#withoutBottomText").addEventListener("input", withOutBottomText)

// FUENTE
$("#fontFamilySelect").addEventListener("input", selectedFontFamily)

// TAMAÑO FUENTE
$("#fontSize").addEventListener("input", selectedFontSize)
  
//JUSTIFICADO IZQUIERDA
$(".fa-align-left").addEventListener("click", textAlignLeft)
  
//JUSTIFICADO CENTRO
$(".fa-align-center").addEventListener("click", textAlignCenter)

//JUSTIFICADO DERECHA
$(".fa-align-right").addEventListener("click", textAlignRight)

//COLOR DE LA LETRA
$("#fontColor").addEventListener("input", selectedFontColor)

//FONDO DEL TEXTO
$("#fontBackgroundColor").addEventListener("input", selectedFontBackgroundColor)

//FONDO TRANSPARENTE DEL TEXTO
$("#transparentBackground").addEventListener("input", withOutFontBackground)

//ESPACIADO
$("#inputSpacing").addEventListener("input", selectedSpacing)

//INTERLINEADO
$("#lineHeightSelect").addEventListener("input", selectedLineHeight)

//CONTORNO NINGUNO
$("#btnNoneShadow").addEventListener("click", withOutTextShadow)

//CONTORNO CLARO
$("#btnLightShadow").addEventListener("click", lightTextShadow)

//CONTORNO OSCURO
$("#btnDarkShadow").addEventListener("click", darkTextShadow)

//DESCARGAR MEME
$("#btnDownload").addEventListener("click", downloadMeme)








