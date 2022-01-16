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


/////register
    const allLabels = document.querySelectorAll('.register-form label')
    allLabels.forEach(label =>{
        label.innerHTML = label.innerText
            .split('')
            .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
            .join('')
    })

    const nameInput = document.getElementById('name') 
    const lNameInput = document.getElementById('l-name') 
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('pwd')
    const confPasswordInput = document.getElementById('conf-pwd')
    const checkCircle = document.querySelectorAll('.fa-check-circle')
    const checkedBtn = document.getElementById('cBox')
    const signUpButton = document.querySelector('.register')


    let nameValidator = 0
   
    let correctCounter = 0
    let emailValidator = 0
    let passwordValidator = 0
   nameInput.addEventListener('input', (e) => {
       if(e.target.value.charCodeAt(0) >= 65 
       && e.target.value.charCodeAt(0) < 90){
           nameValidator++
           console.log(nameValidator)
           e.target.classList.add('correct')
           e.target.classList.remove('wrong')
           e.target.style.borderBottom = '3px solid rgb(15, 247, 15)'
        }
        else{
           nameValidator = 0
           e.target.classList.remove('correct')
           e.target.classList.add('wrong')
           e.target.style.borderBottom = '3px solid red'
       }
       if(nameInput.value === '') {
        nameValidator = 0

        e.target.classList.remove('correct')
        e.target.classList.remove('wrong')
        e.target.style.borderBottom = '1px solid grey'
       }

   })
   lNameInput.addEventListener('input', (e) => {
       if(e.target.value.charCodeAt(0) >= 65 
       && e.target.value.charCodeAt(0) < 90){
           correctCounter++
           e.target.classList.add('correct')
           e.target.style.borderBottom = '3px solid rgb(15, 247, 15)'
           e.target.classList.remove('wrong')
        }
       else{
        correctCounter = 0   
        e.target.classList.remove('correct')
        e.target.classList.add('wrong')
        e.target.style.borderBottom = '3px solid red'
       }

       if(lNameInput.value === ''){
        correctCounter = 0
        lNameInput.classList.remove('correct')
        lNameInput.classList.remove('wrong')
        lNameInput.style.borderBottom = '1px solid grey'
       }
       checkNameAndLast(nameValidator, correctCounter)
    })
    
    

   emailInput.addEventListener('input', (e) => {
       const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

       if(e.target.value.match(emailFormat)){
        emailValidator++;
        e.target.classList.add('correct')
        e.target.style.borderBottom = '3px solid rgb(15, 247, 15)'
        e.target.classList.remove('wrong')
       }
       else{
           emailValidator = 0
           e.target.classList.remove('correct')
           e.target.classList.add('wrong')
           e.target.style.borderBottom = '3px solid red'
        }
        console.log(emailValidator)
       if(e.target.value === '') {
        emailValidator = 0
        e.target.classList.remove('correct')
        e.target.classList.remove('wrong')
        e.target.style.borderBottom = '1px solid grey'
       }
       if(emailValidator > 0){
           checkCircle[1].classList.add('active')
        }
        else{
           checkCircle[1].classList.remove('active')
       }
   })
    let password = ''

    passwordInput.addEventListener('input', (e) => {
        if(e.target.value.length >= 6) {
            e.target.classList.add('correct')
            e.target.style.borderBottom = '3px solid rgb(15, 247, 15)'
            e.target.classList.remove('wrong')
            password = e.target.value.slice(0, e.target.length)

        }
        else{
            e.target.classList.remove('correct')
            e.target.classList.add('wrong')
            e.target.style.borderBottom = '3px solid red'
        }
        if(e.target.value === '') {
            e.target.classList.remove('correct')
            e.target.classList.remove('wrong')
            e.target.style.borderBottom = '1px solid grey'
           }
    })

    confPasswordInput.addEventListener('input', (e) => {
        if(e.target.value === password){
            passwordValidator++;
            e.target.classList.add('correct')
            e.target.style.borderBottom = '3px solid rgb(15, 247, 15)'
            e.target.classList.remove('wrong')
        }
        else{
            passwordValidator = 0
            e.target.classList.remove('correct')
            e.target.classList.add('wrong')
            e.target.style.borderBottom = '3px solid red'
        }
        if(e.target.value === '') {
            passwordValidator = 0;
            e.target.classList.remove('correct')
            e.target.classList.remove('wrong')
            e.target.style.borderBottom = '1px solid grey'
           }
           if(passwordValidator === 1){
               checkCircle[2].classList.add('active')
           }
           else{
            checkCircle[2].classList.remove('active')
           }
    })
    
    signUpButton.addEventListener('click', (e) => {
        //e.preventDefault()
        if(checkedBtn.checked && nameInput.classList.contains('correct') && lNameInput.classList.contains('correct')
            && emailInput.classList.contains('correct') && passwordInput.classList.contains('correct') && confPasswordInput.classList.contains('correct')
        ){
            alert(`Dobrodošao ${nameInput.value}`)
        }
        else{
            alert('Greška, unesi vrijednosti u obavezna polja')
        }
    })


    function checkNameAndLast(name, lastName){
        if(name > 0 && lastName > 0){
            checkCircle[0].classList.add('active')
        }
        else{
         checkCircle[0].classList.remove('active')
        }
    }