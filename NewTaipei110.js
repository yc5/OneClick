javascript: var email = "<<Your Email>>",
  id = "<<Your Personal ID Number>>",
  phone = "<<Yoru Phone Number>>",
  addr = "<<Your Address>>",
  name = "<<Your Name>>";
document.getElementById("event_name").value = name;
document.getElementById("event_identity").value = id;
document.getElementById("event_contact_address").value = addr;
document.getElementById("event_phone").value = phone;
document.getElementById("event_email").value = email;

var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (regex.test(email)) {
  $(this).html("<img src='images/ajax-loader.gif'>");
  $.ajax('send_email.json?isCaptain=false&email=' + email, {
    dataType: 'text'
  }).complete(function(xhr, status) {
    if (status === 'success') {
      $('.confirm_email').html("<img src='images/check.png'>")
        .attr('disabled', true)
        .after("<p class='email_alert' style='color:#00AEFF;'>認證郵件已送出，請點選信中連結認證您的信箱，完成後即可繼續填寫資料，因信箱設定不同，郵件有可能會被系統歸類為垃圾郵件。</p><a href='#' class='change_email btn btn-inverse'>更改信箱</a>")
        .removeAttr('href').removeClass('confirm_email').addClass('email_confirmed');
    } else {
      $('.confirm_email').html('認證信箱').after("<p class='email_alert' style='color:#FF4141;'>發生錯誤，請重新嘗試。如果錯誤持續發生請聯絡系統管理員。</p>");
    }
  });
} else {
  $(this).after('信箱格式錯誤');
