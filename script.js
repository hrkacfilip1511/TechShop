const searchIcon = document.querySelector('.fa-search')
const searchInput = document.querySelector('.search')
const searchContainer = document.querySelector('.for-search')

const menu = document.querySelector('.menu')

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active')
    searchContainer.classList.toggle('active')
})
window.addEventListener('scroll', changeMenu)

function changeMenu() {
    if(window.scrollY >= 500){
        menu.classList.add('active')

    }
    else{
        menu.classList.remove('active')

    }
}

/// slider

const slider = document.querySelector('.slider')
const imgs = document.querySelectorAll('.slider img')
const btnOne = document.querySelector('.btn1')
const btnTwo = document.querySelector('.btn2')
const btnThree = document.querySelector('.btn3')
const btnFour = document.querySelector('.btn4')
const buttons = document.querySelectorAll('.container-slider button')

let imgSlider = 0;

buttons[imgSlider].classList.add('activeBtn')


let interval = setInterval(run, 3000)

function run() {
    imgSlider++
    changePic()
}

function changePic() {
    if(imgSlider > imgs.length - 1){
        imgSlider = 0
    }
    if(imgSlider < 0) {
        imgSlider = imgSlider.length - 1
    }
    slider.style.transform = `translateX(-${imgSlider * 500}px)`
    removeAllBtnBg()
    buttons[imgSlider].classList.add('activeBtn')
}
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 3000)
}
function removeAllBtnBg() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('activeBtn')
    }
}
btnOne.addEventListener('click', () => {
    btnOne.classList.add('activeBtn')
    btnTwo.classList.remove('activeBtn')
    btnThree.classList.remove('activeBtn')
    btnFour.classList.remove('activeBtn')
    imgSlider = 0;
    changePic()
    resetInterval()
})
btnTwo.addEventListener('click', () => {
    btnOne.classList.remove('activeBtn')
    btnTwo.classList.add('activeBtn')
    btnThree.classList.remove('activeBtn')
    btnFour.classList.remove('activeBtn')
    imgSlider = 1;
    changePic()
    resetInterval()
})
btnThree.addEventListener('click', () => {
    btnOne.classList.remove('activeBtn')
    btnTwo.classList.remove('activeBtn')
    btnThree.classList.add('activeBtn')
    btnFour.classList.remove('activeBtn')
    imgSlider = 2;
    changePic()
    resetInterval()
})
btnFour.addEventListener('click', () => {
    btnOne.classList.remove('activeBtn')
    btnTwo.classList.remove('activeBtn')
    btnThree.classList.remove('activeBtn')
    btnFour.classList.add('activeBtn')
    imgSlider = 3;
    changePic()
    resetInterval()
})

////

const pcContainer = document.querySelector('.pcs-container')
const myJson = 'pc.json'
getPcs(myJson)



function getPcs(js) {
    fetch(myJson).then(res => res.json()).then(data => showPCs(data))

}
function showPCs(pcs) {
    pcs.forEach(pc => {
        if(pc.price === 2100){
            const { name, inch, price, picture, overview } = pc
            const div = document.createElement('div')
            div.classList.add('pc-container')
            div.innerHTML = `
            <h2 class="name">${name}</h2>
                <div class = "to-cart">
                    <p class="inches">${inch}"</p>
                    <i class="fas fa-cart-plus"></i>
                </div>
                <img src="${picture}" alt="pic">
                <div class="prices">
                    <h3 class="price sale">${price} KM</h3>
                   <div class="new-price-div"> <i class="fas fa-exclamation-triangle"></i> <h2 class="newPrice">1950 KM</h2><i class="fas fa-exclamation-triangle"></i></div>
                </div>
                <div class="overview">
                    <p class="overview-text">
                        ${overview}
                    </p>
                </div>
            `
    
            pcContainer.appendChild(div)

        }
        else if(pc.price === 1140){
            const { name, inch, price, picture, overview } = pc
            const div = document.createElement('div')
            div.classList.add('pc-container')
            div.innerHTML = `
            <h2 class="name">${name}</h2>
                <div class = "to-cart">
                    <p class="inches">${inch}"</p>
                    <i class="fas fa-cart-plus"></i>
                </div>
                <img src="${picture}" alt="pic">
                <div class="prices">
                    <h3 class="price sale">${price} KM</h3>
                   <div class="new-price-div"> <i class="fas fa-exclamation-triangle"></i> <h2 class="newPrice">1090 KM</h2><i class="fas fa-exclamation-triangle"></i></div>
                </div>
                <div class="overview">
                    <p class="overview-text">
                        ${overview}
                    </p>
                </div>
            `
    
            pcContainer.appendChild(div)

        }
        else if(pc.price === 1700){
            const { name, inch, price, picture, overview } = pc
            const div = document.createElement('div')
            div.classList.add('pc-container')
            div.innerHTML = `
            <h2 class="name">${name}</h2>
                <div class = "to-cart">
                    <p class="inches">${inch}"</p>
                    <i class="fas fa-cart-plus"></i>
                </div>
                <img src="${picture}" alt="pic">
                <div class="prices">
                    <h3 class="price sale">${price} KM</h3>
                   <div class="new-price-div"> <i class="fas fa-exclamation-triangle"></i> <h2 class="newPrice">1620 KM</h2><i class="fas fa-exclamation-triangle"></i></div>
                </div>
                <div class="overview">
                    <p class="overview-text">
                        ${overview}
                    </p>
                </div>
            `
    
            pcContainer.appendChild(div)

        }
        else if(pc.price === 2190){
            const { name, inch, price, picture, overview } = pc
            const div = document.createElement('div')
            div.classList.add('pc-container')
            div.innerHTML = `
            <h2 class="name">${name}</h2>
                <div class = "to-cart">
                    <p class="inches">${inch}"</p>
                    <i class="fas fa-cart-plus"></i>
                </div>
                <img src="${picture}" alt="pic">
                <div class="prices">
                    <h3 class="price sale sale-bg">${price} KM</h3>
                   <div class="new-price-div"> <i class="fas fa-exclamation-triangle"></i> <h2 class="newPrice">2090 KM</h2><i class="fas fa-exclamation-triangle"></i></div>
                </div>
                <div class="overview">
                    <p class="overview-text">
                        ${overview}
                    </p>
                </div>
            `
    
            pcContainer.appendChild(div)

        }
        else if(pc.price >= 2200){
            const { name, inch, price, picture, overview } = pc
            const div = document.createElement('div')
            div.classList.add('pc-container')
            div.innerHTML = `
            <h2 class="name">${name}</h2>
                <div class = "to-cart">
                    <p class="inches">${inch}"</p>
                    <i class="fas fa-cart-plus"></i>
                </div>
                <img src="${picture}" alt="pic">
                <div class="prices">
                    <h3 class="price sale sale-bg">${price} KM</h3>
                   <div class="new-price-div"> <i class="fas fa-exclamation-triangle"></i> <h2 class="newPrice">${price - (price * 0.05)}KM</h2><i class="fas fa-exclamation-triangle"></i></div>
                </div>
                <div class="overview">
                    <p class="overview-text">
                        ${overview}
                    </p>
                </div>
            `
    
            pcContainer.appendChild(div)

        }
        else if(pc.price >= 1300 && pc.price < 1550){
            const { name, inch, price, picture, overview } = pc
            const div = document.createElement('div')
            div.classList.add('pc-container')
            div.innerHTML = `
            <h2 class="name">${name}</h2>
                <div class = "to-cart">
                    <p class="inches">${inch}"</p>
                    <i class="fas fa-cart-plus"></i>
                </div>
                <img src="${picture}" alt="pic">
                <div class="prices">
                    <h3 class="price sale sale-bg">${price} KM</h3>
                   <div class="new-price-div"> <i class="fas fa-exclamation-triangle"></i> <h2 class="newPrice">${price - (price * 0.05)}KM</h2><i class="fas fa-exclamation-triangle"></i></div>
                </div>
                <div class="overview">
                    <p class="overview-text">
                        ${overview}
                    </p>
                </div>
            `
    
            pcContainer.appendChild(div)

        }
        else{
            const { name, inch, price, picture, overview } = pc
            const div = document.createElement('div')
            div.classList.add('pc-container')
            div.innerHTML = `
            <h2 class="name">${name}</h2>
                <div class = "to-cart">
                    <p class="inches">${inch}"</p>
                    <i class="fas fa-cart-plus"></i>
                </div>
                <img src="${picture}" alt="pic">
                <div class="prices">
                    <h3 class="price normal">${price} KM</h3>
                    <h2 class="newPrice"></h2>
                </div>
                <div class="overview">
                    <p class="overview-text">
                        ${overview}
                    </p>
                </div>
            `
    
            pcContainer.appendChild(div)
        
        }
        
    })
    const form = document.getElementById('form')
    
}

searchInput.addEventListener('input', (e) => searchFun(e.target.value))

function searchFun(searchVal) {
    const collection = document.querySelectorAll('.pc-container')
    const collectionName = document.querySelectorAll('.name')
        console.log(collection.length)
        console.log(collectionName.length)
        for(let i = 0; i < collectionName.length; i++){
            if(((collectionName[i].innerHTML).toLowerCase()).indexOf(searchVal) > -1){
                collection[i].style.display = 'block'
            }
            else{
                collection[i].style.display = 'none'
            }
        }
        
}


//// CART



const cartContainer = document.querySelector('.cart-container')
const totalPrice = document.querySelector('.tPrice')
const checkoutBtn = document.querySelector('.checkoutBtn')
const totalPriceContainer = document.querySelector('.total-price')
const emptyCartText = document.querySelector('.emptyCartText')
const cartIcon = document.querySelector('.fa-shopping-cart')
const fullCartScreen = document.querySelector('.full-cart-screen')

cartIcon.addEventListener('click', () => {
    fullCartScreen.classList.toggle('showCart')
})

pcContainer.addEventListener('click', purchaseProduct)
cartContainer.addEventListener('click', deleteProduct)
loadCart()

function purchaseProduct(e){
    if(e.target.classList.contains('fa-cart-plus')){
        let product = e.target.parentElement.parentElement
        getProductInfo(product)
    }
}

function getProductInfo(product) {
    let productInfo = {
        imgSrc: product.querySelector('.pc-container img').src,
        name: product.querySelector('.pc-container .name').textContent,
        price: product.querySelector('.pc-container .price').textContent
    }
 
    addToCart(productInfo)
    saveProductInLocalStorage(productInfo)
}

function addToCart(product) {
    const cartItem = document.createElement('div')
    cartItem.classList.add('article')
    cartItem.innerHTML = `
    <img src="${product.imgSrc}" alt="">
    <div class="details">
        <p>${product.name}</p>
        <div class="more-details">
            <span class="price">${product.price}</span>
        </div>
    </div>
    <button class="delete-btn">X</button>
    
    `
    cartContainer.appendChild(cartItem)
    
}

function saveProductInLocalStorage(item){
    let products = getProductsFromLocalStorage()
    products.push(item)
    localStorage.setItem('products', JSON.stringify(products))
    updateCart()
}

function getProductsFromLocalStorage() {
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
}

function updateCart() {
    let cartPrice = editPrice()
    totalPrice.textContent = +cartPrice.total + 10  + ' KM'
}

function editPrice() {
    let products = getProductsFromLocalStorage()
    let total = products.reduce((acc, product) => {
        let price = parseFloat(product.price.substr(0,5))
        return acc += price
    }, 0)
    return {
        total: total.toFixed(2)
    }
}

function loadCart() {
    let products = getProductsFromLocalStorage()
    if(products.length > 0){
        checkoutBtn.classList.add('showInCart')
        totalPriceContainer.classList.add('showInCart')
        emptyCartText.classList.add('hideEmptyText')

    }else{
        checkoutBtn.classList.remove('showInCart')
        totalPriceContainer.classList.remove('showInCart')
        emptyCartText.classList.remove('hideEmptyText')

    }
    
    products.forEach(product => addToCart(product))
    updateCart()

}

function deleteProduct(e){
    let cartItem
    cartItem = e.target.parentElement

    let prevSibling = cartItem.childNodes
    let article = prevSibling[3]

    let nameElForDelete =  article.childNodes[1].innerText


    if(e.target.classList.contains('delete-btn')){
        cartItem.remove()
    }
    let products = getProductsFromLocalStorage()


    let updatedProducts = products.filter(product => {
        return product.name !== nameElForDelete 
    })
    localStorage.setItem('products', JSON.stringify(updatedProducts))
    updateCart()
}



/////// recension

const container = document.querySelector('.container-opinion')
const firstStar = document.querySelector('.firstStar')
const secStar = document.querySelector('.secStar')
const thirdStar = document.querySelector('.thirdStar')
const fourthStar = document.querySelector('.fourthStar')
const fifthStar = document.querySelector('.fifthStar')
const opinionContainer = document.querySelector('.opinion')
const closeAll = document.querySelector('.close')

    setTimeout(showPoll, 3000)



function showPoll(){
    container.classList.add('active-opinion')
}

firstStar.addEventListener('click',showOpinion)
secStar.addEventListener('click',showOpinion)
thirdStar.addEventListener('click',showOpinion)
fourthStar.addEventListener('click',showOpinion)
fifthStar.addEventListener('click',showOpinion)

function showOpinion() {
    container.innerHTML = ''
    const txtEl = document.createElement('p')
    txtEl.innerHTML = 'Hvala Vam na podršci'

    container.appendChild(txtEl)

    setTimeout(clearAll, 2000)

}
function clearAll() {
    container.classList.remove('active-opinion')
}
function justClose() {
    container.classList.remove('active-opinion')
}


closeAll.addEventListener('click', justClose)

//////// login form

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


