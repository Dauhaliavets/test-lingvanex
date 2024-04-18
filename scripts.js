const tabBtns = document.querySelector(".tab-links");

tabBtns.addEventListener("click", (e) => {
  Array.from(tabBtns.children).forEach((btn) => {
    btn.classList.remove("active");
  });
  let activeTab = e.target.getAttribute("data-tab-btn");
  let tabContent = document.querySelectorAll(".tab-content");
  if (activeTab) {
    e.target.classList.add("active");
    Array.from(tabContent).forEach((content) => {
      const activeContent = content.getAttribute("data-tab-content");
      if (activeContent === activeTab) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  }
});
