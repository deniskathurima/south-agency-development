function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,

    }
    // emailjs.send("service_7d8gym5","template_oznl6n8",parms, "O_wJcT--aNV9TU5cE").then(alert("Email Sent!!"))

    emailjs.send("service_7d8gym5", "template_oznl6n8", parms, "O_wJcT--aNV9TU5cE")
  .then(() => alert("Email Sent!!"))
  .catch((error) => console.error("Error sending email:", error));
}

$(document).ready(function() {
    $(".expertise-item").hover(function() {
        $(this).css("transform", "scale(1.05)");
    }, function() {
        $(this).css("transform", "scale(1)");
    });
});