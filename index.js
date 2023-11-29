let manageremail = "manager"
let managerpass = "manager"

function signup(){
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    localStorage.setItem(email, pass)
}

function login(){
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    if(email == manageremail){
        if(pass == managerpass){
            location.replace("Manmenu.html")
        }else{
            alert("wrong password")

        }
    }else if(localStorage.getItem(email)){
        if(pass === localStorage.getItem(email)){
            location.replace("home.html")
        }
        else{
            alert("wrong password")
        }
    }
    else {
        alert("User not found")
    }
}

//menu code

function display(){
    
}

//manager menu code

function addMenuItem(event){
    console.log("test")
    var name = document.getElementById('title')
    var price = document.getElementById('price')
    var img = document.getElementById('img')
    var data = JSON.parse()
    data.breakfast.push({
        name: "name",
        price: "price",
        img: "img"
    })
    menu.JSON = JSON.stringify(data)
    
    var buttonClicked = event.target
    buttonClicked.parenElement.parenElement.remove()
    console.log("test")

    display()
}

function removeMenuItem(event){
  
}

//The following functions are for users to add and remove items from cart

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for(var i=0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i=0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for(var i=0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    // .addEventListener('click', sendClicked)
}

//Function to remove an item from your cart by clicking on the red "remove" button
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

// This function makes it so that a negative quantity of items or 0 quantity of items cannot be purchased.
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

//This function will add the title, price, and image of any item that is addedto the cart
function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
    var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

//This function will actually create the row that the price title and image sit in.
function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add("cart-row")
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var cartItemNames = document.getElementsByClassName("cart-item-title")
    for (var i=0; i < cartItemNames.length; i++){ //Will not allow you to add the same item into cart rows multiple times
        if(cartItemNames[i].innerText == title){
            alert("You have already added this item to your cart")
            return
        }
    }
    var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem)
    cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged)
}

//This function will update the cart total after other functions are ran
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for(var i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

//For this function after you click "Purchase" it will take you to another page with your receipt and a "thank you" message
function purchaseClicked(){

    var cartItems = document.getElementsByClassName("cart-items")[0]
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

// function sendClicked(){

//     var button = document.getElementsByClassName(button)[0]
//     while(button.hasChildNodes()) {
//         button.removeChild(button.firstChild)
//     }
// }