function goToWhatsapp() {
  const breakLine = `%0A`;

  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;

  const text = `Olá, Agility! Meu nome é ${name} (*${email}*).${breakLine}${breakLine}Mensagem: ${message}`;

  const urlPath = `https://wa.me/5585996284730?text=${text}`;
  window.open(urlPath, "_blank").focus();
}

const menuButton = document.getElementById("menu-button");
const closeMenuButton = document.getElementById("close-button");
const menu = document.getElementById("menu-burguer");
const menuLinks = menu.getElementsByTagName("a");

function closeHamburgerMenu() {
  menu.classList.remove("animate__fadeInDown");
  menu.classList.add("animate__fadeOutUp", "animate__faster");
  setTimeout(() => {
    menu.style.display = "none";
  }, 350);
}

function openHamburgerMenu() {
  menu.classList.remove("animate__fadeOutUp", "hidden");
  menu.classList.add("animate__fadeInDown", "animate__faster");
  menu.style.display = "flex";
}

menuButton.addEventListener(
  "click",
  menu.style.display === "flex" ? closeHamburgerMenu : openHamburgerMenu
);

closeMenuButton.addEventListener("click", closeHamburgerMenu);

for (let menuLink of menuLinks) {
  menuLink.addEventListener("click", closeHamburgerMenu);
}

function handlePortfolioClick(portfolioCategoryId) {
  var countShowing = 0;

  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach(function (portfolioItem) {
    const portfolioItemCategory = portfolioItem
      .getAttribute("data-portfolio-category")
      .split(",");

    if (portfolioItem.style.display !== "none") {
      portfolioItem.classList.add("animate__backOutLeft");
    }

    if (
      portfolioItemCategory.includes(portfolioCategoryId) ||
      portfolioCategoryId === "todos"
    ) {
      countShowing++;

      setTimeout(() => {
        portfolioItem.classList.remove("animate__backOutLeft");
        portfolioItem.classList.add("animate__backInLeft");
        portfolioItem.style.display = "flex";
      }, 300);
    } else {
      portfolioItem.classList.remove("animate__backInLeft");
      portfolioItem.classList.add("animate__backOutLeft");
      portfolioItem.style.display = "none";
    }

    const emptyPortfolioMessage = document.getElementById("NoPortfolioMessage");
    if (countShowing === 0) {
      emptyPortfolioMessage.classList.remove("animate__fadeOut", "hidden");
      emptyPortfolioMessage.classList.add("animate__fadeIn");
    } else {
      emptyPortfolioMessage.classList.remove("animate__fadeIn");
      emptyPortfolioMessage.classList.add("animate__fadeOut");
    }
  });
}

var typed = new Typed("#randomTextElement", {
  strings: ["criativa", "rápida", "inteligente", "fácil"],
  typeSpeed: 50,
  backDelay: 3000,
  loop: true,
});
