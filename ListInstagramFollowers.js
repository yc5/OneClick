var item = document.querySelectorAll("[role=dialog]>div:nth-child(2)>ul>div>li");
var list = "";
for (var i = 0; i < item.length; i++) {
  list +=
    item[i].querySelector("div>div>div:nth-child(2)>div>a").textContent +
    " / " +
    item[i].querySelector("div>div>div:nth-child(2)>div:nth-child(2)").textContent +
    "<br>";
}
var myWindow = window.open("", "Fans List", "width=500,height=800");
myWindow.document.write(list);
