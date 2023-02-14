(() => {
  const sectionElems = document.getElementsByTagName("section");
  const prevBtnElem = document.querySelector(".prevBtn");
  const nextBtnElem = document.querySelector(".nextBtn");
  let currentPage = 0;
  const totalPage = sectionElems.length;

  for (i = 0; i < totalPage; i++) {
    sectionElems[i] = i;
    sectionElems[i].dataset.index = i;
  }

  nextBtnElem.addEventListener("click", function () {
    if (currentPage >= 0) {
      currentPage++;
      handleScroll();
    }
  });
  prevBtnElem.addEventListener("click", function () {
    if (currentPage <= totalPage - 1 || currentPage > 0) {
      currentPage--;
      handleScroll();
    }
  });

  function handleScroll() {
    window.scrollTo({
      top: sectionElems[currentPage].offsetTop,
      behavior: "smooth",
    });
    currentPage = sectionElems[currentPage].dataset.index;
    console.log(currentPage);
  }
})();
