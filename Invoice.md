# 電子發票會員載具一鍵歸戶

當使用者有歸戶公用事業電子發票的需求時，除了在鯨躍科技的電子發票會員平台要輸入帳號、密碼與驗證碼外，點擊歸戶後又需要在財政部電子發票整合服務平台再輸入一次另一組帳號、密碼與驗證碼，過於繁瑣的反人類設計造成使用者不便，因此設計此一鍵歸戶程式加速歸戶流程。

## 財政部電子發票整合服務平台會員載具歸戶
URL: https://www.einvoice.nat.gov.tw/portal/btc/btc103w/main/[TOKEN]

```jsx
javascript:
var captchaInput = document.getElementById("captcha");
var captchaImg = document.querySelector(".code_num>img");
var captchaBase64String = captchaImg.src.split("base64,")[1];
var idInput = document.getElementById("mobile");
var passwordInput = document.getElementById("verify_code");
var checkbox = document.getElementById("c2");
var submitButton = document.querySelector("[title=查詢]");

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = captchaImg.width;
canvas.height = captchaImg.height;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(captchaImg, 0, 0);
captchaBase64String = canvas.toDataURL("image/png").split("base64,")[1];

idInput.value = "YOUR_PHONE_NUMBER";
passwordInput.value = "YOUR_PASSWORD";
checkbox.checked = true;
checkbox.dispatchEvent(new Event("click"));
resolveCaptcha(captchaBase64String).then(text => {
    captchaInput.value = text;
    captchaInput.dispatchEvent(new Event("input"));
    submitButton.click();
});

async function resolveCaptcha(captchaBase64String) {
    const response = await fetch("http://127.0.0.1:9898/ocr/b64/text", {
        method: "POST",
        body: captchaBase64String,
    });
    const text = await response.text();
    return text;
}


```
