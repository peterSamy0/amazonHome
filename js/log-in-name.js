// function to check if the input value is exist in accounts log in 
let userName1 = document.getElementById("lg-userName") 
const createNemAccount = document.getElementById("create-new-account") 

function logInFunc(){    
    arr = JSON.parse(localStorage.getItem("accounts"))
    if(userName1.value){                             //  || userPassword.value
        let foundUser = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].userName === userName1.value){  /// && arr[i].userPassword === userPassword.value
                foundUser = true;
                localStorage.setItem("logName", userName1.value)
                break;
            }
        }
        if (foundUser) {
            setTimeout( ()=>{
                    window.open("../logIn-pass.html", "_self")
                    localStorage.setItem("userName", userName1.value)
                }, 200)
        } else {
            alert("invalid user name or invalid");
        }
    }else{
        alert("please enter all data")
    }
}
    

const logInBnt = document.getElementById("lg-login");
logInBnt.addEventListener("click", logInFunc)

createNemAccount.addEventListener("click", ()=>{
    setTimeout( ()=>{
        window.open("../createAcc.html", "_self")
    }, 100)
})