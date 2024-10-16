
const faqItems = document.querySelectorAll(".faq li");


faqItems.forEach(item => {
  item.addEventListener("click", () => {
  
    item.classList.toggle("show");

    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("show");
      }
    });
  });
});