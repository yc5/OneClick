# Facebook Frontend JavaScript Crawler

## Backup Friend List

```jsx
output = ""

document.querySelectorAll(".fsl").forEach(e=>{
    profileUrl = e.querySelector("a").href
    output += e.textContent
    output += " / "
    output += profileUrl.replace(/(&|\?)fref.+/,"").replace(/[^\?]+\/\/[^\?]+\//,"").replace("profile.php?id=","")
    output += "\n"
})

console.log(output)
```

## Backup Like List From a User

```jsx
var item_classname = '._5rz';
var output_arr = [];
document.querySelectorAll(item_classname).forEach((e)=>{
    var tmp_array = [];
    var x = e.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1];
    var _name = x.childNodes[0].querySelector('a').textContent;
    var _href = x.childNodes[0].querySelector('a').href.split('?')[0];
    var _category = x.childNodes[1].textContent;

    tmp_array.push(_name,_href,_category);
    output_arr.push(tmp_array);

    console.log('Done: ' + _name);
})
console.log(output_arr);
```

## Video Download
``` jsx
javascript:
if (window.location.href.indexOf("video") != -1) {
  var code = document.documentElement.outerHTML;
  var hd_reg = /hd_src_no_ratelimit:"([^"]+)"/g;
  var sd_reg = /sd_src_no_ratelimit:"([^"]+)"/g;
  try {
    try {
      var ex = hd_reg.exec(code);
      var src = ex[1];
    } catch (err) {
      var ex = sd_reg.exec(code);
      var src = ex[1];
    } finally {
      var d = document.createElement("A");
      d.setAttribute("href", src);
      d.setAttribute("download", 1);
      d.setAttribute("target", "_blank");
      d.click();
    }
  } catch (err) {
    alert("Video not found :(");
  }
} else {
  alert("Sorry, this is not a Single Video page. Please navigate to a video page. You will see only one video at the page.");
}
```


## Remove Interests
```jsx
var i = 0;
while (i<10) {
    var father = document.querySelectorAll("._2b2e")[i];
    father.querySelector("button").click();
    console.log(i);
    i++;    
}
```

