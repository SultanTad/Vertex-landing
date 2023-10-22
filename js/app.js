const label = document.querySelectorAll(".faq__accordion-label");

label.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    const accordionItemBody = item.nextElementSibling;
    if(item.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
