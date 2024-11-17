// Seleção de elementos
const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const inputRequiredEmail =  document.getElementById('inputRequiredEmail')
const inputRequiredPassword = document.getElementById('inputRequiredPassword')

const btnEnter = document.getElementById('btnEnter')
const btnRegister = document.getElementById('btnRegister')
const btnAlreadyHaveRegister = document.getElementById('alreadyHaveRegister')

const loginContainer = document.getElementById('loginContainer')
const registerContainer = document.getElementById('registerContainer')

const imgGoogle = document.getElementById('imgGoogle')
const imgGOV = document.getElementById("imgGOV")

const textRed = document.querySelectorAll('.textRed')
const inputTeste = document.querySelectorAll('.inputTeste')
const btnRegisterUser = document.getElementById('btnRegisterUser')

// Funções
function verificationLogin() {
    if(inputEmail.value === "" || inputPassword.value === "") {
        inputRequiredEmail.classList.remove('hidden')
        inputRequiredPassword.classList.remove('hidden')
    } else {
        Toastify(
            {
                text: "SISTEMA EM CONSTRUÇÃO!",
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
    }
}

function registerUser() {
    loginContainer.classList.toggle("hidden")
    registerContainer.classList.toggle("hidden")

}

function otherMethodLogin() {
    Toastify(
        {
            text: "SISTEMA EM CONSTRUÇÃO!",
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
}

function validationRegister() {

    let prosseguir = true
   
    inputTeste.forEach((input, index) => {
        if(input.value === "") {
            textRed[index].classList.remove('hidden')
            prosseguir = false
        }else {
            textRed[index].classList.add('hidden')
        }
    })
    
    if(prosseguir) {
        Toastify(
            {
                text: "CADASTRADO!",
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
        inputTeste.forEach(input => input.value = "")
        registerUser()
    }
    
}

// Eventos
btnEnter.addEventListener('click', verificationLogin)
btnRegister.addEventListener('click', registerUser)
btnAlreadyHaveRegister.addEventListener('click', registerUser)
imgGoogle.addEventListener("click", otherMethodLogin)
imgGOV.addEventListener("click", otherMethodLogin)
btnRegisterUser.addEventListener('click', validationRegister)