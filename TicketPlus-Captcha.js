javascript:
var svgElement = document.querySelector(".captcha-img svg");
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
  console.log(pngDataURL);

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
      document.querySelector(".v-text-field__slot input").value = "ERR";
      console.error(e);
    });
};
