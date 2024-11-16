const btnEnter = document.getElementById('btnEnter')
const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const inputRequiredEmail =  document.getElementById('inputRequiredEmail')
const inputRequiredPassword = document.getElementById('inputRequiredPassword')

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

btnEnter.addEventListener('click', verificationLogin)