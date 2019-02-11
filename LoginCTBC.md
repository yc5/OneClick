# 一鍵登入中國信託網路銀行 CTBC

https://www.ctbcbank.com/

```js
javascript: 
if(window.location.href.includes("CTCBPortalWeb")){
  document.querySelector("input[id*=':id']").value = "<<Your ID>>";
  document.querySelector("input[id*=':userid']").value = "<<Your UserID>>";
  document.querySelector("input[id*=':passwd']").value = "<<Your Password>>";
  document.getElementById("imgObj").style.width = "inherit";
  document.querySelector("input[id*=':captchaVal']").select();
  document.querySelector("input[id*=':captchaVal']").addEventListener("keyup", function() {
    if (this.value.length == 6) {
      isValid();
    }
  });
}else {
  window.location.href = "https://www.ctbcbank.com/";
}
```
