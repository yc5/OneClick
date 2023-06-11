// Works at https://www.etax.nat.gov.tw/etw-main/web/ETW183W2_10701/

javascript:
if(window.location.hostname!="invoice.etax.nat.gov.tw"){
	window.location.href="https://invoice.etax.nat.gov.tw";
}
var list = new Set();
document.querySelectorAll(".etw-color-red").forEach( function(element, index) {
	txt = element.textContent.slice(-3);
	list.add(txt);
});
array_list = Array.from(list);
array_list.sort();

output = "<table>";
txt_year_month = document.querySelector(".etw-on").textContent.slice(0,10);
array_list.forEach( function(element, index) {
	output += "<tr><td>" + txt_year_month + "</td><td style='color: red;font-size: 3rem;font-weight: bold;'>" + element + "</td></tr>";
});
output += "</table>";
var myWindow = window.open("", "invoice List", "width=200,height=400");
myWindow.document.write(output);
myWindow.focus();
