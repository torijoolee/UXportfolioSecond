(() => {
  // show "prevBtn" when scrolling down
  const prevBtn = document.querySelector(".prevBtn");
  const container = document.querySelector(".container");

  prevBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    const barElem = document.querySelector(".progress-bar");

    const maxScrollValue = document.body.offsetHeight - window.innerHeight;

    const scrollPer = window.scrollY / maxScrollValue;
    console.log(scrollPer);

    barElem.style.width = scrollPer * 100 + "%";
  });

  // progress-bar

  // window.addEventListener("scroll", function () {});
})();
