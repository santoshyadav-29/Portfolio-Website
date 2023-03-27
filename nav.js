ham_icon.addEventListener("click", ()=> {
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});
