let NivScroll = window.scrollY;

window.addEventListener("scroll", () => {
  const ScrollActuel = window.scrollY;
  if (NivScroll > ScrollActuel) {
    navbar.style.top = 0 + "px";
  } else {
    navbar.style.top = -60 + "px";
  }
  NivScroll = ScrollActuel;
});
