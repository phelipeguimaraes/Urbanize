// Seleção de elementos
const firstLogin = document.getElementById('firstLogin')
const loginBox = document.getElementById('loginBox')
const cadastroBox = document.getElementById('cadastroBox')
const img = document.getElementById('img')
const returnLogin = document.getElementById('returnLogin')
//Parei aqui >>>>>
const btnRegister = document.getElementById('btn-register')
const inputBoxRegister = document.querySelectorAll('#inputBox input')
// Parei aqui <<<

const inputEmail = document.getElementById('btnInputEmail')
const inputPassword = document.getElementById('btnInputPassword')
const btnEnter = document.getElementById('btn-enter')




// Functions
const displayRegister = () => {
    loginBox.classList.toggle('hide')
    cadastroBox.classList.toggle('hide')
    img.classList.toggle('hide')
}

const verificationLogin = () => {

    const inputEmailValue = inputEmail.value
    const inputPasswordValue = inputPassword.value

    if(inputEmailValue && inputPasswordValue) {
        alert('Preenchido!')
    } else {
        alert('Preenche os campos!')
    }
}


// Eventos

btnEnter.addEventListener('click', verificationLogin)

firstLogin.addEventListener('click', displayRegister)

returnLogin.addEventListener('click', () => {
    displayRegister()
})