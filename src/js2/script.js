// Seleção de elementos
const recuperationUserBox = document.getElementById('recuperationUserBox')
const insertCodeBox = document.getElementById('insertCodeBox')
const btnRecuperation = document.getElementById('btnRecuperation')
const inputEmailRecuperation = document.getElementById('inputEmailRecuperation')
const textoVermelho = document.getElementById('textoVermelho')
// Funções
function validationInputUser() {

    inputEmailRecuperation.value === "" ? textoVermelho.classList.remove('hidden') : recuperationUserBox.classList.add('hidden') || insertCodeBox.classList.remove('hidden')
    
}


// Eventos
btnRecuperation.addEventListener('click', validationInputUser)