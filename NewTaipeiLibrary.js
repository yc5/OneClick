javascript:
if(window.location.href.includes("Login.page")){
	var PH = [
		{"o": "user", "n": "userName", "v": "<<Your ID>>"},
		{"o": "password", "n": "password", "v": "<<Your Password>>"},
		{"o": "Hidden", "n": "redirectPage", "v": "opac/Search"},
		{"o": "Hidden_0", "n": "ssologin", "v": "true"},
	];
	for(var i in PH) {
	    var d = document.querySelector("input[name=" + PH[i].o + "]");
		d.value = PH[i].v;
		d.name = PH[i].n;
	}
	document.querySelector("#form").submit();
}else{
	if(document.documentElement.innerText.indexOf("登出") != -1){
		if(window.location.href.toLowerCase().indexOf("search") != -1){
			document.querySelector("#q").focus();
		}else{
			window.location.href = "http://webpac.tphcc.gov.tw/toread/opac/search";	
		}
	}else{
		window.location.href = "http://webpac.tphcc.gov.tw/toread/opac/Login.page";
	}
}
