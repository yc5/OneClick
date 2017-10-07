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
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://tvrs.ntpd.gov.tw/send_email.json?isCaptain=false&email=" + email, true);
xhttp.send();
