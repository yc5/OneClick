// Works at https://www.etax.nat.gov.tw/etw-main/web/ETW183W2_10701/

javascript:
var list = "";
document.querySelectorAll(".number").forEach( function(element, index) {
	list += element.textContent + "\t";
});
list = list.replace(/ /g, "");
list = list.replace(/、/g, "\t");
list = list.split("\t");
var d = list.map( function(e) {
	return e.slice(-3);
});
list = "";
d.forEach( function(element, index) {
	list += element + "<br>";
});
var myWindow = window.open("", "Fans List", "width=200,height=400");
myWindow.document.write(list);
myWindow.focus();
