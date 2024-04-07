# 新光銀行

## 刷卡活動登錄快速登入

URL: https://www.skbank.com.tw/creditcardActivitysignin
```jsx
javascript:
var captchaInput = document.querySelector(".input-captcha__input>input");
var idInput = document.getElementById("positiveCardIdControl");
var birthdayInput = document.getElementById("mat-input-0");
var submitButton = document.querySelector("[skbanktrackformsubmit]");
fetch("http://127.0.0.1:9898/ocr/b64/text", {
    method: "POST",
    body: document.querySelector(".input-captcha__img>img").src.split("base64,")[1],
})
    .then((res) => res.text())
    .then((text) => {
        idInput.value = "YOUR_ID";
        idInput.dispatchEvent(new Event("input"));

        captchaInput.value = text;
        captchaInput.dispatchEvent(new Event("input"));

        birthdayInput.value = "YYYY/MM/DD";
        birthdayInput.dispatchEvent(new Event("input"));
        birthdayInput.dispatchEvent(new Event("change"));
        submitButton.click();
    });
```

## 個人金融網交易明細爬蟲 Transaction Crawler
新光銀行交易明細中原「交易日」欄位包含換行過的Datetime，「備註/特別備註」欄位包含3種組合方式，導致直接複製時因格式不一備份不易。

```jsx
// save the query response to temp first

var dataobject = temp1;
var i = dataobject.target;
var result = [];
i.forEach(e=>{
    var singleRecord = [];
    var singleDate = new Date(e.transactionDay);
    var year = singleDate.getMonth()+1;
    var transactionDay = singleDate.getFullYear()+"/"+year+"/"+singleDate.getDate();
    singleRecord.push(transactionDay);
    singleRecord.push(e.transactionTime);
    singleRecord.push(e.agent);
    singleRecord.push(e.summary);
    singleRecord.push(e.expenditure?e.expenditure:"");
    singleRecord.push(e.deposit?e.deposit:"");
    singleRecord.push(e.balance);
    singleRecord.push(e.comment+e.inAccountMemo);
    result.push(singleRecord);
});

var outputString = "";
result.forEach(e=>{
    e.forEach(e=>{
        outputString = outputString + e + "\t";
    });
    outputString = outputString + "\n";
});
console.log(outputString);
```
