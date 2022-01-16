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

///about us

const companyContainer = document.querySelector('.about-us-content')
const whatWeOfferContainer = document.querySelector('.what-we-offer')
const companyTitle = document.querySelector('.comp')
const offerTitle = document.querySelector('.offer-title')

companyContainer.addEventListener('mouseenter', e => hoverContainer(e.target))
whatWeOfferContainer.addEventListener('mouseenter', e => hoverContainer(e.target))
companyContainer.addEventListener('mouseleave', e => unHoverContainer(e.target))
whatWeOfferContainer.addEventListener('mouseleave', e => unHoverContainer(e.target))


function hoverContainer(container) {
    container.classList.add('hover')
    if( container.classList.contains('what-we-offer')){
         offerTitle.style.opacity = '1'

    }
    else{
        companyTitle.style.opacity = '1'

    }
}
function unHoverContainer(container) {
    container.classList.remove('hover')
    companyTitle.style.opacity = '0.4'
    offerTitle.style.opacity = '0.4'
}


/// staff

const staffContainer = document.querySelector('.staff-container')


let staffCounter = 5;
const url = 'https://randomuser.me/api/'
const position = ['CEO', 'Frontend Developer', 'Backend Developer', 'Business Operator', 'Seller']
for(let i = 0; i < staffCounter; i++){
    fetchStaff(i)
}

function fetchStaff(i){
    fetch(url).then(res => res.json()).then(data => showOnPageStaff(data.results, i))
}

function showOnPageStaff(staff, i){
    const worker = document.createElement('div')
    const line = document.createElement('div')
    line.classList.add('line-between')
    worker.classList.add('staff')
    worker.innerHTML = `
    <img src="${staff[0].picture.large}" alt="staffImg">
    <div class="staff-details">
        <span class="name">${staff[0].name.first + ' ' + staff[0].name.last}</span>
        <span class="work-position">${position[i]}</span>

    </div>
    `
    staffContainer.appendChild(line)
    staffContainer.appendChild(worker)
}

/*function getRandomPosition() {
    return position[Math.floor(Math.random() * position.length)]
}*/