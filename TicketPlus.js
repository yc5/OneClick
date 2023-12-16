javascript:
var ticketsCount = 2;
waitForElm("button.v-expansion-panel-header:not([class*=active]):not(:has(.soldout))").then(e => {
    e.click();
});
waitForElm("button.v-btn.light-primary-2").then(e => {
    while (ticketsCount > 0) {
        e.click();
        ticketsCount--;
    }
});
window.scrollTo(0, document.body.scrollHeight);

document.querySelector("input[placeholder=請輸入驗證碼]").select();
document.querySelector("input[placeholder=請輸入驗證碼]").addEventListener("keyup", e => {
    if (e.target.value.length == 4) {
        document.querySelector(".nextBtn").click();
    }
});

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
