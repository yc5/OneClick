# 一鍵登入 friday 音樂

 ```js
javascript: 
var url_login = "signin_email";
var url_api =
  "https://beethoven.omusic.com.tw/api/fblogin/web/signin?returl=omusic.friday.tw%2Fauth.php%3Fticket%3Db9c291866ce1008da8bad0c59deb04d3%26originalURL%3D%2F";
if (window.location.href.includes(url_login)) {
  var loginForm = document.forms.signin;
  completeForm(loginForm);
}else if (window.location.href.includes(url_api)) {
  window.location.href = "signin_email";
} else {
  window.location.href = url_api;
}

function completeForm(f) {
  f.a.value = "YOUR_EMAIL";
  f.p.value = "YOUR_PASSWORD";
  f.submit();
  return false;
}

 ```
