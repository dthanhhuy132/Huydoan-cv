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
  const itemEls = document.querySelectorAll(".item");
  const itemActive = document.querySelector(".item-active");
  const itemActiveResponsive = document.querySelector(
    ".item-active-responsive"
  );

  const itemIsActive = document.querySelector(".item.active");

  if (itemActiveResponsive.style.width == 0)
    itemActiveResponsive.style.width = itemIsActive.clientWidth + "px";

  itemEls.forEach((itemEl, index) => {
    itemEl.addEventListener("click", () => {
      itemActive.style.top = `${index * 75}px`;
      itemActiveResponsive.style.left = itemEl.offsetLeft + "px";
      itemActiveResponsive.style.width = itemEl.clientWidth + "px";
    });
  });
}

export function clickOnLogo() {
  const itemActive = document.querySelector(".item-active");
  const activeClass = document.querySelector(".item.active");

  itemActive.style.top = `0px`;
}

export function navigationActiveResponsive() {
  const itemActive = document.querySelector(".item.active");
  const itemActiveResponsive = document.querySelector(
    ".item-active-responsive"
  );
  itemActiveResponsive.style.width = itemActive.clientWidth + "px";
  itemActiveResponsive.style.left = itemActive.offsetLeft + "px";
}

export function hideNavigation() {
  window.addEventListener("resize", responsiveDetect);

  responsiveDetect();
  function responsiveDetect() {
    if (window.innerWidth < 768) document.body.classList.add("is-responsive");
    else document.body.classList.remove("is-responsive");
  }

  let previousScrollTop = 0;
  window.addEventListener("scroll", function () {
    let currentScrollTop = window.scrollY;
    // Xử lý
    if (currentScrollTop > previousScrollTop) {
      // Scroll Down
      document.body.classList.add("scroll-down");
      document.body.classList.remove("scroll-up");
    } else if (currentScrollTop < previousScrollTop) {
      // Scroll Up
      document.body.classList.remove("scroll-down");
      document.body.classList.add("scroll-up");
    }

    // Trước khi return (Trước tầm vực hàm bị xoá bỏ)
    previousScrollTop = currentScrollTop;
    removeHideNavigation();
  });

  function removeHideNavigation() {
    let documentHeight = document.documentElement.offsetHeight;
    let scrollToTop = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let topBarHeight = document.querySelector(
      ".navigation .options"
    ).offsetHeight;

    // console.log("documentHeight", documentHeight);
    // console.log("scrollToTop", scrollToTop);
    // console.log("windowHeight", windowHeight);
    // console.log("topBarHeight", topBarHeight);

    let resutls = scrollToTop + windowHeight - documentHeight + 65;

    if (resutls >= 10) document.body.classList.add("stop-scroll-down");
    else document.body.classList.remove("stop-scroll-down");
  }
}
