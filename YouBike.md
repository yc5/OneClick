# YouBike Improvements

## MapZoom
Example URL: https://taipei.youbike.com.tw/station/map

```js
document.querySelector('#map-canvas>div').style='position: fixed; left: 0px; top: 0px; width: 100%; height: 100vh; z-index: 999;';
```
## Fetch Records
We found a built-in function to fetch ride records.

```js
getAjax(true, 'get', '/tw1/rideRecord', {card_no: "XXXXXXXXXXXXXXXX"},e=>{console.log(e)})
```

## Stations List CSV

### #1 list
Example URL: https://taipei.youbike.com.tw/station/2_list?5e0d9644bae27166af1d5903
```js
var row = "";
document.querySelectorAll(".page").forEach(e=>{
    var datas = e.querySelector("a").href.split("'");
    row += datas[1] +","+ datas[3] +","+ decodeURI(datas[5]) +","+ decodeURI(datas[7])+"\n";
    
});
console.log( row );
```
### #2 map
Example URL: https://taipei.youbike.com.tw/station/2_map?5e0d965bbae27166a62a1993
```js
var row = "";
temp1.retVal.forEach(e=>{
    var count = 0;
    for(var i in e){
        row+=e[i];
        if(Object.keys(e).length-1 > count){ row+=",";}
        count++;
    }
    row+="\n";
});
console.log(row);
```

## Login 2019
In 2019 version, it supports multi accounts login.

Example URL: https://ntpc.youbike.com.tw/login/

```js
javascript:
if (window.location.href.includes("ntpc.youbike.com.tw/login")) {
    var ids = ["0900000000", "0900000000"];
    var pw = ["password1", "password2"];
    var br = document.createElement("br");
    var idSelect = document.createElement("SELECT");
    if (ids.length == pw.length) {
        idSelect.name = "account";
        idSelect.innerHTML = '<option value="-1">請選擇帳號</option>';
        ids.forEach(function (e, i) {
            idSelect.innerHTML += '<option value="' + i + 1 + '">' + e + '</option>';
        });
        var form = document.querySelector("form");
        var img = document.getElementById("verify_image");
        form.childNodes[5].insertBefore(br, img);
        form.insertBefore(idSelect, form.childNodes[5]);
        img.style.width = "407px";
        form.querySelectorAll("input")[0].type = "hidden";
        form.querySelectorAll("input")[1].type = "hidden";
        var inputVerify = document.getElementById("login-verify");
        inputVerify.addEventListener("keyup", function () {
            var choice = idSelect.options[idSelect.selectedIndex].text;
            if (this.value.length == 4) {
                document.getElementById("account").value = choice;
                document.getElementById("password").value = pw[idSelect.selectedIndex - 1];
                login.dataSend();
            }
        });
        document.querySelector("select[name=account]").addEventListener("change", function () {
            inputVerify.select();
        });

    } else {
        alert("帳號與密碼陣列數目不同，請修正程式碼");
    }
} else {
    window.location.href = "https://ntpc.youbike.com.tw/login/";
}
```
