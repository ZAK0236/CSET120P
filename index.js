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
    }
    if(localStorage.getItem(email)){
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