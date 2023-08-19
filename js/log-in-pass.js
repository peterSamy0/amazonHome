let userPassword = document.getElementById("lg-userPassword")
function logInFunc(){    
    arr = JSON.parse(localStorage.getItem("accounts"))
    let enteredName = localStorage.getItem("logName")
    console.log(enteredName)
    if(userPassword.value){                             //  || userPassword.value
        let foundUser = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].userName === enteredName && arr[i].userPassword === userPassword.value){  /// && 
                foundUser = true;
                break;
            }
        }

        if (foundUser) {
            setTimeout( ()=>{
                    window.open("../index.html", "_self")
                   
                }, 200)
        } else {
            alert("invalid user name or invalid");
        }
    }else{
        alert("please enter all data")
    }
}
    

const logInBnt = document.getElementById("lg-login-pass");
logInBnt.addEventListener("click", logInFunc)


