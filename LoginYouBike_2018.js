javascript:
var code = document.documentElement.outerHTML;
if(window.location.href.includes("//wa.ntpc.youbike.com.tw/login")){
  var f = document.forms[0];
  f.phonenumber.value = "<<Your Phone Number>>";
  f.password.value = "<<Your Password>>";
  f.submit();
}else if (code.indexOf("登出") > 0) {
  if (window.location.href.includes("//wa.ntpc.youbike.com.tw/riding_records")) {
    document.forms[0].cardnohash.options[1].selected = true;
    document.forms[0].submit();
  } else {
    window.location.href = "http://wa.ntpc.youbike.com.tw/riding_records";
  }
} else {
  window.location.href = "http://wa.ntpc.youbike.com.tw/login";
}
