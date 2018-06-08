var item = document.querySelectorAll(".NroHT");
var list = "";
for (var i = 0; i < item.length; i++) {
  list +=
    item[i].querySelectorAll("a")[1].textContent +
    " / " +
    item[i].querySelectorAll("div")[4].textContent +
    "<br>";
}
var myWindow = window.open("", "Fans List", "width=500,height=800");
myWindow.document.write(list);
