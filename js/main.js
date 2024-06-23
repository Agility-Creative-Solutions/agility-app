function goToWhatsapp() {
  const breakLine = `%0A`;

  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;

  const text = `Olá, Agility! Meu nome é ${name} (*${email}*).${breakLine}${breakLine}Mensagem: ${message}`;

  const urlPath = `https://wa.me/5585996284730?text=${text}`;
  window.open(urlPath, '_blank').focus();
}

var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu-burguer");

menuButton.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {

  if (links[i].getAttribute("href").startsWith("#")) {
    links[i].addEventListener("click", function () {

    });
  }
}
menuButton.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});





function handlePortfolioClick(portfolioCategoryId) {
  var portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach(function (portfolioItem) {
    var portfolioItemCategory = portfolioItem.getAttribute("data-portfolio-category").split(',');

    if (portfolioItemCategory.includes(portfolioCategoryId) || portfolioCategoryId === "todos") {
      portfolioItem.style.display = "flex";
    } else {
      portfolioItem.style.display = "none";
    }
  });
}


var typed = new Typed('#randomTextElement', {
  strings: ['criativa', 'rápida', 'inteligente', 'fácil'],
  typeSpeed: 50,
  backDelay: 3000,
  loop: true,
});