// Seleção de elementos
const recuperationUserBox = document.getElementById('recuperationUserBox')
const insertCodeBox = document.getElementById('insertCodeBox')
const btnRecuperation = document.getElementById('btnRecuperation')
const inputEmailRecuperation = document.getElementById('inputEmailRecuperation')
const textoVermelho = document.getElementById('textoVermelho')
const codeAgain = document.getElementById('codeAgain')
const countdown = document.getElementById('countdown');

// Funções
function validationInputUser() {

    inputEmailRecuperation.value === "" ? textoVermelho.classList.remove('hidden') : recuperationUserBox.classList.add('hidden') || insertCodeBox.classList.remove('hidden')
    
}


// Eventos
btnRecuperation.addEventListener('click', validationInputUser)


codeAgain.addEventListener('click', () => {
    
    Toastify(
        {
            text: "Enviamos novamente!",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }
    ).showToast()

    let interval

    countdown.style.display = 'block';
    let remainingTime = 10;
    countdown.textContent = `${remainingTime}s`;
    countdown.style.color = 'red'

    interval = setInterval(() => {
        remainingTime -= 1
        countdown.textContent = `${remainingTime}s`;
        
        if (remainingTime <= 0) {
            // Reativar o botão e esconder a contagem
            clearInterval(interval);
            button.disabled = false;
            
          }
    }, 1000)

    codeAgain.disabled = true

    setTimeout(() => {
        codeAgain.disabled = false
    }, 60000)
})