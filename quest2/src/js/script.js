
const form = document.querySelector(".formulario")
const botao = document.querySelector(".botao")
let infos = document.querySelectorAll(".dados") 
let obrigatorio = document.querySelectorAll(".obrigatorio")

botao.addEventListener("click", function(){

        infos.forEach(function(item){

        if (item.value != ""){
        item.nextElementSibling.classList.remove('mostrar')   
        item.classList.add('respondido')
        item.classList.remove ('nao-respondido')
        
    } 
        else {
            item.nextElementSibling.classList.remove('esconder')
            item.nextElementSibling.classList.add('mostrar')
            item.classList.add('nao-respondido')
            item.classList.remove('respondido')
        }
        })
    })



