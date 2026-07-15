function login() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "RESINNA" && pass === "24110023") {
        alert("Login Berhasil");
        window.location.href = "dashboard.html";
    } else {
        alert("Login Gagal");
    }
}