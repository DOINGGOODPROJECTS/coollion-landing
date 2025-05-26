setTimeout(() => {
  const menu = document.querySelector("#menu");
  const menuDelete = document.querySelector("#menuDelete");
  const navbar = document.querySelector(".appbarMobileNvabar");
  const listitem = document.querySelector(".listitem > ul");

  for (let index = 0; index < listitem.childNodes.length; index++) {
    const element = listitem.childNodes[index];
    element.addEventListener("click", () => {
      navbar.classList.toggle("showNavbar");
    });
  }
  menu.addEventListener("click", function () {
    navbar.classList.toggle("showNavbar");
  });
  menuDelete.addEventListener("click", function () {
    navbar.classList.toggle("showNavbar");
  });
}, 1000);
