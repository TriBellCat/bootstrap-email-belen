function sendMessage() {
    var emailComposeBox = document.getElementById("emailComposeBox");
    if (emailComposeBox.style.display === "none") {
        emailComposeBox.style.display = "block";
    } else {
        emailComposeBox.style.display = "none";
    }
}
