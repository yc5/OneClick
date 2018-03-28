javascript:
if(window.location.href.includes("//wa.ntpc.youbike.com.tw/login")){
	var f = document.forms[0];
	f.phonenumber.value = "<<Your Phone Number>>";
	f.password.value = "<<Your Password>>";
	f.submit();
}else{
	window.location.href = "http://wa.ntpc.youbike.com.tw/login";
}
