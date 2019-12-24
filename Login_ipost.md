# 一鍵登入中華郵政網路郵局 iPost

https://ipost.post.gov.tw

```js
javascript:
var scope = angular.element("[ng-controller=LoginController]").scope(); 
scope.userActNo = "USER_ACCOUNT_NUMBER";
scope.userID = "USER_ID";
scope.userPWD = "USER_PASSWORD";
var login_type = 1;

document.querySelectorAll(".codes_img>img")[login_type-1].style.height = "auto"; 
document.querySelectorAll(".codes_img>img")[login_type-1].style.width = "322px"; 
document.querySelectorAll("input[name=captcha]")[login_type-1].select();

document.querySelectorAll("input[name=captcha]")[login_type-1].addEventListener("keyup", function() {
  if (this.value.length == 4) {
    scope.loginTabType = login_type;
    var rkey = scope.inputVO.captcha + "0000";
    scope.objEncrypt = scope.getRsa3Des(rkey, scope.userPWD, scope.publicKey);
    scope.objEncryptID = scope.getRsa3Des(rkey, scope.userID, scope.publicKey);
    scope.login();
  }
});
```
