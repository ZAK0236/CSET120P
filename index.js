function refreshPage(){
    window.location.reload();
} 
function signup(){
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    localStorage.setItem(email, pass)
}

function login(){
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

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