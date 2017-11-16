javascript:
if(window.location.href.includes("loginControl")){
	try{
		$("input[name=username]").val("<<Your ID>>");
		$("input[name=password]").val("<<Your Password>>");
		$("input[name=codenumber]").val($("input#codeVal").val());
		$("input[type=submit]").click();
	}catch(err){
		alert(err.message);
	}
}else{
	window.location.href = "http://www.library.ntpc.gov.tw/loginControl/";
}
