    const form=document.getElementById("st-form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

    let username = document.getElementById("name").value.trim();
    let password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let birth = document.getElementById("birth").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let address = document.getElementById("address").value.trim();
    let country = document.getElementById("country").value.trim();
    let postal = document.getElementById("postal").value.trim();

    let valid=true;

                        //name validation
    if (username===""){
        document.getElementById("not").innerHTML="Enter your name";
        valid=false;
    }
    else if(!/^[A-Za-z]{3,20}$/.test(username)){
        document.getElementById("not").innerHTML="Please Enter valid name";
        valid=false;
    }
    else{
        document.getElementById("not").innerHTML="";
    }

                        //pass validation
    if (password===""){
        document.getElementById("passerror").innerHTML="Enter the password";
        valid=false;
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|:;'<>,.?/~`]).{8,}$/.test(password)){
        document.getElementById("passerror").innerHTML="Please Enter Valid password";
        valid=false;
    }
    else{
        document.getElementById("passerror").innerHTML="";
    }

                        //email validation
    if(email===""){
        document.getElementById("emailerror").innerHTML="Enter the email";
        valid=false;
        }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        document.getElementById("emailerror").innerHTML="Please Enter valid Email";
        valid=false;
    }
    else{
        document.getElementById("emailerror").innerHTML="";
    }

                        //mobile number
    if(mobile===""){
        document.getElementById("number").innerHTML="Enter your Number";
        valid=false;
        }
    else if(!/^[0-9]{10}$/.test(mobile)){
        document.getElementById("number").innerHTML="Please Enter valid number";
        valid=false;
    }
    else{
        document.getElementById("number").innerHTML=""
    }

                        //Birth date
    if(birth===""){
        document.getElementById("date").innerHTML="Select your birth date";
        valid=false;
    }
    else{
        document.getElementById("date").innerHTML="";
    }
    
                        //gender
    if (!gender) {
        document.getElementById("gendererror").innerText = "Select your gender";
        valid = false;
    } 
    else {
        document.getElementById("gendererror").innerText = "";
    }

                        //address
    if(address===""){
        document.getElementById("add").innerHTML="Enter your address";
        valid=false;
    }
    else{
        document.getElementById("add").innerHTML="";
    }

                        //country
    if(country===""){
        document.getElementById("count").innerHTML="Select your country";
        valid=false;
    }
    else{
        document.getElementById("count").innerHTML=""
    }

                        //postal code
    if(postal===""){
        document.getElementById("post").innerHTML="Enter the postal code";
        valid=false;
    }
    else if(!/^[0-9]{5,6}$/.test(postal)){
        document.getElementById("post").innerHTML="Enter valid postal code";
        valid=false;
    }
    else{
        document.getElementById("post").innerHTML="";
    }

                        //if valid=true
    if(valid){
        document.getElementById("Result").innerHTML="Form sumbitted successfully!";
    }


    });