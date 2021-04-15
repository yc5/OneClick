# 一鍵登入臺灣科技大學 NTUST

## 學生資訊系統202005
https://studentpay.ntust.edu.tw/

```js
javascript: 
var f = document.Form1;
f.studentno.value = "STUDENT_ID";
f.idcard.value = "ID_LAST_FOUR_DIGITS";
f.DropMonth.value = "BIRTHDAY_MONTH_WITH_ZERO";
f.DropDay.value = "BIRTHDAY_DAY_WITH_ZERO";
f.password.value = "PASSWORD";
f.code_box.autocomplete = "off";
f.code_box.select();
f.code_box.addEventListener("keyup", function () {
  if (this.value.length == 6) {
    f.Button1.click();
  }
});

```

## 學生資訊系統
https://stuinfo8.ntust.edu.tw/ntust_stu/stu.aspx

```js
javascript:
if(window.location.href.includes("/stu.aspx")) {
  var f = document.Form1;
  f.studentno.value = "YOUR_STUDENT_NO";
  f.idcard.value = "YOUR_ID_LAST_4_DIGITS";
  f.DropMonth.value = "YOUR_BIRTHDAY_MONTH_WITH_0";
  f.DropDay.value = "YOUR_BIRTHDAY_DAY_WITH_0";
  f.password.value = "YOUR_PASSWORD";
  f.code_box.select();
  f.code_box.addEventListener("keyup", function() {
    if (this.value.length == 6) {  	  
  	  f.Button1.click();
    }
  });
}else if (window.location.href.includes("/query_course.aspx")) {
  document.forms[0].Button2.type = "button";
  document.forms[0].courseno.tabIndex = 2;
  document.forms[0].courseno.select();
  document.forms[0].rand_box.value = "";
  document.forms[0].rand_box.addEventListener("keyup", function() {
    if (this.value.length == 6) {
      document.forms[0].Button1.click();
    }
  });
}else if (window.location.href.includes("/stu_menu.aspx")) {
  document.forms[0].Button5.click();
}else {
  window.location.href = "https://stuinfo8.ntust.edu.tw/ntust_stu/stu.aspx";
}
```

## 校園授權軟體
```js
javascript:
document.getElementById('ctl00_ContentPlaceHolder1_txtStuID').value = 'STUDENT_ID';
document.getElementById('ctl00_ContentPlaceHolder1_txtIdCard').value = 'FULL_ID';
document.getElementById('ctl00_ContentPlaceHolder1_txtBirthday').value = 'BIRTHDAY_SIX_DIGITS';
document.getElementById('ctl00_ContentPlaceHolder1_txtStuPwd').value = 'PASSWORD';
document.getElementById('ctl00_ContentPlaceHolder1_Button01').click();
```

## 選課系統
https://courseselection.ntust.edu.tw/Account/Login
```js
javascript: 
if (window.location.href.includes('Account/Login')) {
    var imgValiCode = document.getElementById('valiCode');
    var iValiCode = document.getElementById('VerifyCode');
    var theform = document.forms[0];
    theform[1].value = 'YOUR_ID';
    theform[2].value = 'YOUR_PASSWORD';
    imgValiCode.style = 'width:100%';
    iValiCode.autocomplete = 'off';
    iValiCode.style = 'font-size: 40px;text-transform: uppercase;';
    iValiCode.select();
    window.addEventListener("keyup", function() {
        if (iValiCode.value.length == 6) {
            theform[4].click();
            theform[4].value = '%E7%99%BB%E5%85%A5%E4%B8%AD%E8%AB%8B%E7%A8%8D%E5%80%99...';
            theform[4].classList = 'btn btn-danger';
            iValiCode.disabled = true;
        }
    });
} else {
    window.location.href = 'https://courseselection.ntust.edu.tw/Account/Login';
}
```

## 第三餐廳菜單抓取
https://orderttu.azurewebsites.net
```js
out = ""
DATA_URL = "https://orderttu.azurewebsites.net/api/api_product_list.php?rnd=1586428531788&currentPage=1&itemCount=30&fssel=88190819&stno=002&grpno=A05"
fetch(DATA_URL)
.then(r=>{return r.json()})
.then(myjson=>{
    myjson.data.forEach(e=>{
        out += e.mernm + "\t" + e.pic1 + "\n"
    })
    console.log(out)
})
```


## 校內文件管理系統
```js
var result = "";
for(var i = 0; i < 4; i++){
	result += document.querySelectorAll("img")[i].src.match(/\d/g);
}
console.log(result);
```
