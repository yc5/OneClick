# 一鍵登入 friday 音樂

 ```js
javascript: 
var url =
  "https://beethoven.omusic.com.tw/api/fblogin/web/signin_email";
if (window.location.href == url) {
  var loginForm = document.forms.signin;
  completeForm(loginForm);
} else {
  window.location.replace(url);
}

function completeForm(f){
  f.a.value = "YOUR_EMAIL";
  f.p.value = "YOUR_PASSWORD";
  f.submit();
  return false;
}

 ```
