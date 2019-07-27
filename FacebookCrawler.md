# Facebook Frontend JavaScript Crawler

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
