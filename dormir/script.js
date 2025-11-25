var titulo = document.getElementById(`titulo`)
var imagem = document.getElementById(`img`)
result = document.getElementById(`result`)

function NãoSei(){
    alert(`Opção errada!`)
}

function Sei(){
    titulo.innerText = `Muito bem, princesa. Hora de mimir <3`
    imagem.src = `imagens/gato.jpg`
    imagem.style.margin = `80px`
    imagem.style.width = `450px`
    result.style.display = `block`
    document.getElementById(`escolha`).style.display = `none`
}

function BoaNoite(){
    alert(`Bons Sonhos, amor!`)
}