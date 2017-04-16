javascript:
document.getElementById("login-phone").value = "<<Your ID>>";
chkloginphone();
document.getElementById("062-04").value = "<<Your Password>>";
chkloginppwd();
var x = document.getElementById('verify_image').alt;
document.getElementById("login-verify").value = x;
chklogincode();
setTimeout(clickLogin, 900);

function clickLogin() {
    document.getElementById("login_btn").click();
}