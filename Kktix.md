# KKTIX

URL: https://kktix.com/events/[EVENTID]/registrations/new

注意事項：

- 同一活動若有多個場次，須手動進入不同日期
- 選擇票種、數量後，送出按鈕根據活動不同有 2 種型態：「下一步」與「自行選位、電腦配位」
- reCaptcha 可能不會彈出來

```jsx
javascript: var plusBtnList = document.querySelectorAll(".btn-default.plus");
if (plusBtnList.length == 0) {
  window.location.reload();
} else {
  document.querySelectorAll(".btn-default.plus")[0].click();
  document.querySelector("#person_agree_terms").checked = true;
  document
    .querySelector("#person_agree_terms")
    .dispatchEvent(new Event("click"));
  var actionBtnList = document.querySelectorAll(".btn.btn-primary.btn-lg");
  actionBtnList[actionBtnList.length - 1].click();
}

```
