# 一鍵登入中華郵政網路郵局 iPost

https://ipost.post.gov.tw

```js
javascript:
var scope = angular.element("[ng-controller=LoginController]").scope(); 
scope.userActNo = "XXXXXXXXXXXXXX";		//存簿帳號
scope.userID = "XXXXXXX";			//使用者代號
scope.userPWD = "XXXXXXX";			//網路密碼

document.querySelectorAll(".codes_img>img")[1].style.height = "auto"; 
document.querySelectorAll(".codes_img>img")[1].style.width = "322px"; 
document.querySelectorAll("input[name=captcha]")[1].select();

document.querySelectorAll("input[name=captcha]")[1].addEventListener("keyup", function() {
  if (this.value.length == 4) {
    scope.loginTabType = "2";
    var rkey = scope.inputVO.captcha + "0000";
    scope.objEncrypt = scope.getRsa3Des(rkey, scope.userPWD, scope.publicKey);
    scope.objEncryptID = scope.getRsa3Des(rkey, scope.userID, scope.publicKey);
    scope.login();
  }
});
```
