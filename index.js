let manageremail = "manager"
let managerpass = "managerpass"

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
            location.replace("menu.html")
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

function addMenuItem(event){

}

function removeMenuItem(event){

}
