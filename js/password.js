    function checkPswd() {
        var confirmPassword = "password";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="html/Link Zac McRae.html";
        }
        else{
            alert("Incorrect password, please try again");
        }
    }