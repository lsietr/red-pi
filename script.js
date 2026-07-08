const header = document.querySelector(".site-header");

const updateHeaderShadow = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

window.addEventListener("scroll", updateHeaderShadow, { passive: true });
updateHeaderShadow();
