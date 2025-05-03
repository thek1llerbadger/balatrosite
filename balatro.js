// balatro.js
// Function to handle the login process
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    function register() {
        if (email === "" && password === "") {
            alert("Please enter your email and password.");
                return;
            }
        if (email !== "" && password !== "") {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            document.getElementById("criar").innerHTML = "Conta criada com sucesso!";
            document.getElementById("criar").style.color = "lightgreen";
            }
        }
       
    function login() {                  
        if (email === "" && password === "") {
            alert("Please enter your email and password.");
            }else if (email !== "" || password !== "1234") {
            document.getElementById("incorreto").innerHTML = "Email ou Senha incorreto(s).";
            document.getElementById("incorreto").style.color = "red";
            }else if (email === storedEmail && password === storedPassword) {
                alert("Login successful!");
                window.location.href = "http://127.0.0.1:5500/balatro.html";
            }
        else {
            alert("Please enter your email and password.");
        }
    }