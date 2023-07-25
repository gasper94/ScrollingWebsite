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

  // Testing - Get the scrollPercentage element and update its content with the scrolling percentage
  // const scrollPercentageElement = document.getElementById("scrollPercentage");
  // scrollPercentageElement.textContent = `Scrolling: ${Math.min(
  //   percertOfScreenHeightScrolled * 100,
  //   100
  // )}%`;
}

setScrollVar();

const observer = new IntersectionObserver((entries) => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];
    if (entry.isIntersecting) {
      document
        .querySelectorAll("[data-img]")
        .forEach((img) => img.classList.remove("show"));
      const img = document.querySelector(entry.target.dataset.imgToShow);
      img?.classList.add("show");
      break;
    }
  }
});

document.querySelectorAll("[data-img-to-show]").forEach((section) => {
  observer.observe(section);
});
