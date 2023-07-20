window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percertOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  console.log(Math.min(percertOfScreenHeightScrolled * 100), 100);

  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percertOfScreenHeightScrolled * 100, 100)
  );
}

setScrollVar();
