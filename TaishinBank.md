# 台新

## 活動登錄

### 隱藏冗餘資訊

該頁面設計過高的冗餘資訊，導致搶登錄時難專注選擇。

```js
javascript:
document.querySelectorAll(".form-item-more-description").forEach(e=>{e.style.display = "none"});
document.querySelectorAll(".form-item-list").forEach(e=>{e.style.display = "none"});
```

### 瞬間全選並送出登錄

```js
javascript:
document.querySelectorAll("[type=checkbox]").forEach(e=>{e.click()});
saveEvent();
```
