# 一鍵登入臺灣科技大學學生資訊網站 NTUST

https://stuinfo8.ntust.edu.tw/ntust_stu/stu.aspx

```js
javascript:
if(window.location.href.includes("//stuinfo8.ntust.edu.tw/ntust_stu/stu.aspx")){
  var f = document.Form1;
  f.studentno.value = "<<Your Student Mo>>";
  f.idcard.value = "<<Your ID Last 4 Digits>>";
  f.DropMonth.value = "<<Your Birthday Month with 0>>";
  f.DropDay.value = "<<Your Birthday Day with 0>>";
  f.password.value = "<<Your Password>>";
  f.code_box.select();
  f.code_box.addEventListener("keyup", function() {
    if (this.value.length == 6) {  	  
  	  f.Button1.click();
    }
  });
}else {
  window.location.href = "https://stuinfo8.ntust.edu.tw/ntust_stu/stu.aspx";
}
```
