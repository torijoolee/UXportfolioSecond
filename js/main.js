(() => {
  // show "prevBtn" when scrolling down
  const prevBtn = document.querySelector(".prevBtn");
  const container = document.querySelector(".container");

  prevBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // progress-bar
  window.addEventListener("scroll", function () {
    const barElem = document.querySelector(".progress-bar");

    const maxScrollValue = document.body.offsetHeight - window.innerHeight;

    const scrollPer = window.scrollY / maxScrollValue;
    // console.log(scrollPer);

    barElem.style.width = scrollPer * 100 + "%";
  });
  // scrollAnimation

  let item = document.querySelectorAll("section");

  let observer = new IntersectionObserver((e) => {
    e.forEach((item) => {
      if (item.isIntersecting) {
        item.target.style.opacity = 1;
      } else {
        item.target.style.opacity = 0;
      }
    });
  });

  item.forEach((elem) => {
    for (let i = 0; i < item.length; i++) {
      observer.observe(item[i]);
    }
  });
})();
