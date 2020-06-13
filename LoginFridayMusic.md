# 一鍵登入 friday 音樂

 ```js
javascript: 
var url =
  "https://beethoven.omusic.com.tw/api/fblogin/web/signin_email";
if (window.location.href == url) {
  document.forms[0].a.value = "YOUR_EMAIL";
  document.forms[0].p.value = "YOUR_PASSWORD";
  document.forms[0].submit();
} else {
  window.location.href = url;
}

 ```
