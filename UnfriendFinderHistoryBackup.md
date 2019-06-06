# Unfriend Finder History Backup
This code is for backing up history of a Facebook unfriend notifier, Unfriend Finder.<br>
https://www.unfriend-app.com

```jsx
document.querySelectorAll('.project').forEach((e)=>{
	var output = 
		e.querySelector('.h4').textContent + ' / '
		+ e.querySelector('.badge').textContent + ' / '
		+ e.querySelector('a').href + ' / '
		+ e.querySelector('.project-date').textContent + ' / ';
	console.log(output);
})
```
