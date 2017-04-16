javascript: 
var s = document.createElement("a");
s.innerHTML = "Click to download";
s.href = document.getElementById("pImage_0").src;
s.id = "theLink";
s.download = true;
document.body.appendChild(s);
document.getElementById("theLink").click();