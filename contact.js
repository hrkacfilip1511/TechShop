const searchIcon = document.querySelector('.fa-search')
const searchInput = document.querySelector('.search')
const searchContainer = document.querySelector('.for-search')

const menu = document.querySelector('.menu')


window.addEventListener('scroll', changeMenu)

function changeMenu() {
    if(window.scrollY >= 500){
        menu.classList.add('active')

    }
    else{
        menu.classList.remove('active')
    }
}

/// contact

const nameInput = document.getElementById('u-name')
const emailInput = document.getElementById('email')
const msgInput = document.getElementById('textarea')
const sendBtn = document.querySelector('.send')
const statusMsgContainer = document.querySelector('.status-msg-container')

sendBtn.addEventListener('click', showMsg)

function showMsg() {

    if(nameInput.value !== '' && emailInput.value !== '' && msgInput.value !== ''){
        const txt = document.createElement('div')
        txt.classList.add('cloud')
        txt.innerHTML = `<p>
        Poštovani ${nameInput.value}, <br>
        Tvoja poruka je poslana uspješno.<br>
        Uživaj i dalje na našoj stranici! &#128512;
        </p>
        `
        statusMsgContainer.appendChild(txt)
        setTimeout(() => showMsg, 1500)
        setTimeout(() => txt.remove(), 3500)

        nameInput.value = ''    
        emailInput.value = ''    
        msgInput.value = ''
    } 
    else{
        alert('Unesi potrebna polja')
    }
}
//// login
const userIcon = document.querySelector('.fa-user-alt')
const closeLoginBtn = document.querySelector('.fa-times')
const loginContainer = document.querySelector('.login-container')

userIcon.addEventListener('click', () => {
    loginContainer.classList.add('show-login')
})
closeLoginBtn.addEventListener('click', () => {
    loginContainer.classList.remove('show-login')
})
window.addEventListener('click', (e) => {
    e.target == loginContainer ? loginContainer.classList.remove('show-login') : false
})