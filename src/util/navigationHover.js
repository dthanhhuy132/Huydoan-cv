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
  const itemActive = document.querySelector(".item-active");
  const itemActiveResponsive = document.querySelector(
    ".item-active-responsive"
  );
  const itemEls = document.querySelectorAll(".item");
  itemEls.forEach((itemEl, index) => {
    itemEl.addEventListener("click", () => {
      itemActive.style.top = `${index * 75}px`;
      itemActiveResponsive.style.left = itemEl.offsetLeft + "px";
      itemActiveResponsive.style.width = itemEl.clientWidth + "px";
    });
  });
}
