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
        console.log("test")
        if(pass == managerpass){
            console.log("test")
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

//manager menu code

function addMenuItem(event){

}

function removeMenuItem(event){

}