export default function navigationHover() {
  const itemEmty = document.querySelector(".item-emty");
  const itemEls = document.querySelectorAll(".item");
  itemEls.forEach((itemEl, index) => {
    itemEl.addEventListener("mouseover", () => {
      itemEmty.style.top = `${index * 75}px`;
      itemEmty.style.height = "75px";
    });
  });

  itemEls.forEach((itemEl, index) => {
    itemEl.addEventListener("mouseleave", () => {
      itemEmty.style.height = "0px";
    });
  });
}

export function navigationActive() {
  const itemEmty = document.querySelector(".item-active");
  const itemEls = document.querySelectorAll(".item");
  itemEls.forEach((itemEl, index) => {
    itemEl.addEventListener("click", () => {
      itemEmty.style.top = `${index * 75}px`;
      itemEmty.style.height = "75px";
    });
  });
}
