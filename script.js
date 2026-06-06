function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "aisha" && password === "kicaumania"){

        localStorage.setItem("login", "true");

        window.location.href = "splash.html";

    }else{

        document.getElementById("error").innerText =
        "Username atau password salah!";
    }
}