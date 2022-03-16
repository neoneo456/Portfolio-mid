window.onload = pageLoad;

function pageLoad(){

    var form = document.getElementById("myForm");

    form.onsubmit = validateForm;

}



function validateForm() {
    var lastname = document.forms["myForm"]["lastname"];

    var gender = document.forms["myForm"]["gender"];

    var birtday = document.forms["myForm"]["bday"];

    var email = document.forms["myForm"]["email"];

    var username = document.forms["myForm"]["username"];

    var password = document.forms["myForm"]["password"];

    var error = document.getElementById("error")
 
    error.innerText = "";
 

   
  var result = true;



    if(lastname.value == ""){

        error.innerText += "lastname,"

        result = false;
 
    }


    if(gender.value == ""){

        error.innerText += "gender,"

        result = false;
 
    }


    if(birtday.value == ""){

        error.innerText += "birthday,"

        result = false;
 
    }


    if(email.value == ""){

        error.innerText += "email,"

        result = false;
 
    }


    if(username.value == ""){

        error.innerText += "username,"

        result = false; 

    }


    if(password[0].value != password[1].value )

    {
        error.innerText += "Password not match!!"

        result = false;
    }


    if (result == false)

    {

        return false;

    }

}