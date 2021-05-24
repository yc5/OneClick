# 一鍵登入中華郵政網路郵局 iPost

https://ipost.post.gov.tw

2021

```js
javascript:
var scope = angular.element("[ng-controller=LoginController]").scope();
scope.cif_id = "USER_CIF_ID";
scope.userActNo = "USER_ACCOUNT_NUMBER";
scope.userID = "USER_ID";
scope.userPWD = "USER_PASSWORD";

var login_type = 1;

document.querySelectorAll(".codes_img>img")[login_type - 1].style.height = "auto";
document.querySelectorAll(".codes_img>img")[login_type - 1].style.width = "322px";
document.querySelectorAll("input[name=captcha]")[login_type - 1].select();

document.querySelectorAll("input[name=captcha]")[login_type - 1].addEventListener("keyup", function () {
    if (this.value.length == 4) {
        scope.loginCheck('1');
    }
});
```

2020

```js
javascript:
var scope = angular.element("[ng-controller=LoginController]").scope(); 
scope.cif_id = "USER_CIF_ID";
scope.userActNo = "USER_ACCOUNT_NUMBER";
scope.userID = "USER_ID";
scope.userPWD = "USER_PASSWORD";
var login_type = 1;
var login_type_other = login_type == 1 ? 2 : 1;

$(".tab"+login_type_other+"_txt").removeClass("active");
$(".tab"+login_type+"_txt").addClass("active");
var _clickTab = $(".tab"+login_type+"_txt").find("a").attr("href");
$(_clickTab).stop(false, true).fadeIn().siblings().hide();

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
