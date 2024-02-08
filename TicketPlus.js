javascript:
var ticketsCount = 1;

var currentUrlMatch = window.location.pathname.match(/[^\/]+/g);
if (currentUrlMatch[0] === "activity") {
    if (document.querySelectorAll(".v-dialog").length > 0) {
        if (document.querySelector(".v-card__title").textContent.trim() === "請注意") {
            document.querySelector(".v-btn.primary").click();
        }
    }
    waitForElm(".sesstion-item button").then(e => {
        e.click();
    }).catch(e => {
        console.error(e);
    })
} else if (currentUrlMatch[0] === "order") {
    var lenSoldout = document.querySelectorAll(".soldout").length;
    var lenChoices = document.querySelectorAll(".v-expansion-panel-header:not([class*=active])").length;
    if (lenSoldout === lenChoices) {
        var d = new Date();
        console.log(`All Soldout at ${d.toLocaleTimeString()}`);
        window.location.reload();
    }

    if (document.querySelectorAll(".v-dialog").length > 0) {
        var d = new Date();
        console.log(`Dialog at ${d.toLocaleTimeString()}`);
        window.location.reload();
    }

    waitForElm("button.v-expansion-panel-header:not([class*=active]):not(:has(.soldout))").then(e => {
        e.click();
        waitForElm(".v-expansion-panel.v-expansion-panel--active.v-item--active").then(e => {
            console.log(e.textContent.replace(/\s/gm, ""));
            if (e.textContent.includes("開賣時間")) {
                var d = new Date();
                console.log(`Not Started at ${d.toLocaleTimeString()}`);
                window.location.reload();
            }
        });
    });
    waitForElm("button.v-btn.light-primary-2").then(e => {
        while (ticketsCount > 0) {
            e.click();
            ticketsCount--;
        }
    });
    window.scrollTo(0, document.body.scrollHeight);
    resolveCaptcha();
}
async function resolveCaptcha() {
    var svgElement = await waitForElm(".captcha-img svg");
    var img = new Image();
    img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svgElement.outerHTML);
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        var pngDataURL = canvas.toDataURL("image/png");
        fetch("http://127.0.0.1:9898/ocr/b64/text", {
            method: "POST",
            body: pngDataURL.split("base64,")[1],
            signal: AbortSignal.timeout(1000)
        })
            .then((res) => res.text())
            .then((text) => {
                console.log(text);
                document.querySelector(".v-text-field__slot input").value = text;
                document
                    .querySelector(".v-text-field__slot input")
                    .dispatchEvent(new Event("input"));
                document.querySelector(".nextBtn").click();
            }).catch(e => {
                document.querySelector("input[placeholder=請輸入驗證碼]").select();
                document.querySelector("input[placeholder=請輸入驗證碼]").addEventListener("keyup", e => {
                    if (e.target.value.length == 4) {
                        document.querySelector(".nextBtn").click();
                    }
                });
            });
    };
}
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
