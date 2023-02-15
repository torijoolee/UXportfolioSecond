(() => {
  const navItemElems = document.querySelector(".nav-menu");

  navItemElems.addEventListener("click", function (e) {
    const target = e.target;
    const link = target.dataset.link;

    if (link == null) {
      return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({
      behavior: "smooth",
    });
  });
})();
