javascript:
var currentUrlMatch = window.location.pathname.match(/[^\/]+/g);
if (currentUrlMatch[0] === "activity") {
    if (document.querySelectorAll(".buy").length > 0) {
        getEntryLink().then(link => {
            if (link) { window.location.href = link }
            else { window.location.reload() }

        });

    } else {
        window.location.reload()

    }
} else if (currentUrlMatch[0] === "ticket" && currentUrlMatch[1] === "area") {
    var itemList = document.querySelectorAll(".area-list li");
    var itemsToClickIndex = [];
    itemList.forEach((e, i) => {
        if (!e.textContent.includes("已售完")) {
            itemsToClickIndex.push(i)
        }
    });
    if (itemsToClickIndex.length == 0) {
        window.location.reload()
    } else {
        itemList[itemsToClickIndex[0]].querySelector("a").click()
    }
} else if (currentUrlMatch[0] === "ticket" && currentUrlMatch[1] === "ticket") {
    var ticketAmount = 1;
    var captchaInput = document.getElementById("TicketForm_verifyCode");
    var captchaImg = document.getElementById("TicketForm_verifyCode-image");
    var captchaBase64String = getCaptchaBase64String(captchaImg);
    var submitButton = document.querySelector("[type=submit]");

    resolveCaptcha(captchaBase64String).then((text) => {
        captchaInput.value = text;
        captchaInput.dispatchEvent(new Event("input"));
        document.querySelectorAll("[id*=TicketForm_ticketPrice]")[0].value = ticketAmount;
        document.getElementById("TicketForm_agree").checked = true;
        submitButton.click();
    });
}

async function getEntryLink() {
    const url = window.location.href.replace("detail", "game");
    const response = await fetch(url, {
        credentials: "include",
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    });
    const text = await response.text();
    const matches = [...text.matchAll(/data-href="([^"]+)"/mg)];
    if (matches.length > 0) {
        return matches[0][1]
    } else {
        return undefined
    }
}

function getCaptchaBase64String(imgElement) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgElement, 0, 0);
    return canvas.toDataURL("image/png").split("base64,")[1];
}

async function resolveCaptcha(captchaBase64String) {
    const response = await fetch("http://127.0.0.1:9898/ocr/b64/text", {
        method: "POST",
        body: captchaBase64String,
    });
    const text = await response.text();
    return text;
}