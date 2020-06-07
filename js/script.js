// creating variables
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const mail = document.querySelector("#mail")
const message = document.querySelector("#message");
const outputName = document.querySelector("#output-name");
const outputMail = document.querySelector("#output-mail");
const outputMessage = document.querySelector("#output-message");

// adding eventlistener

submit.addEventListener("click", function(event) {

    console.log("Form submitted");

    //validating form for not being empty

    if(validateNotEmpty(name.value)===true) {
        outputName.innerHTML = ``;
    }
    else{
        outputName.innerHTML = `name is required`;
    }

    if(validateNotEmpty(message.value)===true) {
        outputMessage.innerHTML = ``;
    }
    else{
        outputMessage.innerHTML = `message is required`;
    }

    //validating e-mail

    if(emailInputLength(mail.value) === true) {
        outputMail.innerHTML = ``;

        if(validateEmail(mail.value) === true) {
            outputMail.innerHTML = ``;
        }
        else {
            outputMail.innerHTML = `e-mail format is invalid`;
        }

    }
    else{
        outputMail.innerHTML = `e-mail is required`;
    }
    
});


// Validation functions

//Name and message

function validateNotEmpty(inputValue) {
    if (inputValue.trim().length > 0) {
        return true;
    }
    else {
        return false;
    }
}

//E-mail
function emailInputLength(emailValue) {
    if(emailValue.trim().length > 0) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

