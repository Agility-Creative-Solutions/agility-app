function goToWhatsapp () {
    const breakLine = `%0A`;

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    const text = `Me chamo ${name}, dono do email *${email}*.${breakLine} ${message}`;

    const urlPath = `https://wa.me/5585996284730?text=${text}`;
    window.open(urlPath, '_blank').focus();
}

var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu-burguer");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});