// login page

// to cancel creating new account
// var cancelBtn = document.getElementById("cr-cancel")
// var outerWinfow = document.getElementById("lg-newAccount")
// cancelBtn.addEventListener("click", () => outerWinfow.style.display = "none")


// // to open the form of creating account when click btn create new account
// var createBtn = document.getElementById("createAccount")
// var outerWinfow = document.getElementById("lg-newAccount")
// createBtn.addEventListener("click", () => outerWinfow.style.display = "block")


// // validation of new account information


const newUserName = document.getElementById("newUserName")
const userPhone = document.getElementById("cr-phone")
const createBtn = document.getElementById("cr-btn-signUp")
const accountPass = document.getElementById("cr-password")
const confirmAccountPass = document.getElementById("cr-confirm-password")
let newAccountPass;


// variables of warning messages
let errorName = document.getElementById("cr-error-name")
let errorPhone = document.getElementById("cr-error-phone")
let errorPass = document.getElementById("cr-error-pass")
let errorRePass = document.getElementById("cr-error-re-pass")


const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;   // regular exprission for user name 
const passwordRegex = /\w{6,}$/;                        // regular exprission for user password 
const phoneRegex = /^01[0125]\d{8}$/;                   // regular exprission for user phone number   

// var ifnoObj;
let arr = []
if (!localStorage.getItem("accounts")) {
    localStorage.setItem("accounts", JSON.stringify(arr));
}

createBtn.addEventListener('click', function(){
if(accountPass.value === confirmAccountPass.value){    
    newUser = newUserName.value;                     // get the user name from input
    newAccountPass = accountPass.value;              // get the user pass from input
    newAccountPhone = userPhone.value;               // get the user confirm pass from input
    
    if(!usernameRegex.test(newUser)){                 // check name
        errorNameFunc()
    }else if( !phoneRegex.test(newAccountPhone) ){    // check Phone
        errorPhoneFunc()
    }else if( !passwordRegex.test(newAccountPass) ){  // check password 
        errorPassFunc()
    }else{                                            // success registration                  
        addObject()
        successInputFunc()
    }   
}else {                                                // check confirm password
    errorConfirmPass()
}
})
    

// error name function
function errorNameFunc(){
    errorName.style.display = "block";
    errorPhone.style.display = "none";
    errorPass.style.display = "none";
    errorRePass.style.display = "none"
    newUserName.classList.add("danger");
    userPhone.classList.remove("danger");
    accountPass.classList.remove("danger");
    confirmAccountPass.classList.remove("danger");
}
// error phone function
function errorPhoneFunc(){
    errorName.style.display = "none";
    errorPhone.style.display = "block";
    errorPass.style.display = "none";
    errorRePass.style.display = "none"
    newUserName.classList.remove("danger");
    userPhone.classList.add("danger");
    accountPass.classList.remove("danger");
    confirmAccountPass.classList.remove("danger");
}
// error password function
function errorPassFunc(){
    errorName.style.display = "none";
    errorPhone.style.display = "none";
    errorPass.style.display = "block";
    errorRePass.style.display = "none"
    newUserName.classList.remove("danger");
    userPhone.classList.remove("danger");
    accountPass.classList.add("danger");
    confirmAccountPass.classList.remove("danger");
}
// success registeration
function successInputFunc(){
    newUserName.value = "";
    accountPass.value = "";
    userPhone.value = "";
    confirmAccountPass.value = "";
    errorName.style.display = "none";
    errorPhone.style.display = "none";
    errorPass.style.display = "none";
    errorRePass.style.display = "none"
    newUserName.classList.remove("danger");
    userPhone.classList.remove("danger");
    accountPass.classList.remove("danger");
    confirmAccountPass.classList.remove("danger");
    setTimeout(() => {
        open("../index.html", "_self")
    }, 1000);
}
// error confirm password function
function errorConfirmPass(){
    errorRePass.style.display = "block"
        errorPass.style.display = "none";
        errorPhone.style.display = "none";
        errorName.style.display = "none";
        accountPass.classList.add("danger");
        userPhone.classList.remove("danger");
        newUserName.classList.remove("danger");
        confirmAccountPass.classList.add("danger");
}

//  to add new account to localStorage*****************
function addObject(){
    arr = JSON.parse(localStorage.getItem("accounts")) || []  // get array information from local srorage;
    if (!Array.isArray(arr)) {
        arr = []; // Set arr to an empty array if it's not a valid array
      }
    // collect information of new account
    let ifnoObj = {userName: "", userPassword: ""};

    ifnoObj.userName = newUser;
    ifnoObj.userPassword = newAccountPass;


    arr.push(ifnoObj)
    var arrToJson = JSON.stringify(arr);
    
    localStorage.setItem("accounts", arrToJson)   // set information in local storage as json
}



