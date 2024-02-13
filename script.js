const img = document.querySelector(".Starbucks")
const circulo = document.querySelector(".circulo")

function trocarImagem(endereço){
    img.src = endereço
}
function trocarColor(Color){
    circulo.style.background = Color
}