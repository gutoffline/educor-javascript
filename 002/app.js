console.log("Encontro 2")

/*
Sintaxe javascript, variáveis e tipos de dados
*/

// variáveis

nome = "Guto"
console.log(nome)
var nome = "José"
console.log(nome)
var nome = "Silvia"
console.log(nome)
let sobrenome = "Xavier"
console.log(sobrenome)

if(10>3){
    console.log("10 maior que 3")
    let idade=21
    console.log(idade)
}

//console.log(idade)

let midia = "tv"
console.log(midia)

//Tipos de dados
let idade
let apelido

idade = 15
apelido = "Gui"
console.log(typeof idade )
console.log(typeof apelido)

let concorda = true
console.log(typeof concorda)

let carros = ['gol','corsa', 'uno']
console.log(typeof carros)

let pessoa = {'nome':'guto', 'idade':'36'}
console.log(typeof pessoa)


document.getElementById("titulo").style.backgroundColor = "lightgreen"
console.log(document.getElementById("titulo"))
document.getElementById("titulo").innerText = "Melhor Sabor"
let tituloDaPagina
tituloDaPagina = document.getElementById("titulo").innerText
console.log(tituloDaPagina)

let elementoSubtitulo
elementoSubtitulo = document.getElementById("subtitulo")
console.log(elementoSubtitulo)
elementoSubtitulo.style.backgroundColor = "lightblue"
elementoSubtitulo.innerHTML = "<em>Seu restaurante certo</em>"


let frutas = ["🍉","🍋","🍒"]
console.log(frutas)
console.dir(frutas)
console.table(frutas)

document.write("<h3>Cardápio</h3>")
document.write(frutas)

alert("Bom dia, seja bem vindo ao meu site")
let nomeCompleto = prompt("Qual seu nome?","Digite aqui")

alert("Olá " + nomeCompleto + " espero que goste")
document.write("<br>nome: " + nomeCompleto)
