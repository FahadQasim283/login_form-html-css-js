const email = "fahadqasim3310@gmail.com";
const password = "123";

function validate() {
    var myemail = document.getElementById("email").value;
    var mypass = document.getElementById("pass").value;

    console.log(email, password)
    console.log(myemail, mypass)
    if (myemail == '' || mypass == '') {
        alert("Please fill All the fields");
        return;
    }
    if (myemail == email && mypass == password) {
        console.log("value matched")
        document.getElementById("login").textContent = "Please wait!!!";
        setTimeout(function () {
            document.getElementById("login").textContent = "Login Succeful";
            document.getElementById("login").style.color = "#058922";
        }, 2000);
        setTimeout(function () {
            document.getElementById("login").textContent = "Login";
            document.getElementById("login").style.color = "white";
            document.getElementById("email").value = '';
            document.getElementById("pass").value = '';
        }, 3000);
    }
    else {
        alert("Wrong credentials")
    }
}
function init() {
    document.getElementById("mymail").textContent += email;
    document.getElementById("mypass").textContent += password;
}
init();