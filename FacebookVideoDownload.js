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
