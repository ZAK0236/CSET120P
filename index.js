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

//customer menu code

function addToCart(){

}

function removeFromCart(){

}

//manager menu code

function newItem(){
    var addInterface = document.createElement('div')
    addInterface.classList.add('add-interface')
    var shopItems = document.getElementsByClassName('shop-items')[0]
    var interfaceContent = `<span class="shop-item-title"><input type="text" id="title"></span>
        <input type="text" id="img">
        <div class="shop-item-details">
            <span class="shop-item-price"><input type="text" id="price"></span>
            <button class="btn btn-primary shop-item-button" type="button" onclick"addMenuItem(event)">ADD ITEM</button>
        </div>`
    addInterface.innerHTML = interfaceContent
    shopItems.append(addInterface)
    
}

function addMenuItem(event){
    var name = document.getElementById('title')
    var price = document.getElementById('price')
    var img = document.getElementById('img')
    var data = JSON.parse(menu)
    data.breakfast.push({
        name: "name",
        price: "price",
        img: "img"
    })
    menu = JSON.stringify(data)
    
    var buttonClicked = event.target
    buttonClicked.parenElement.parenElement.remove()
    console.log("test")

    display()
}

function removeMenuItem(event){
  
}
