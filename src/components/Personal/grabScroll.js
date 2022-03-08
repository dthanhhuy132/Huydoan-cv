export function grabScroll() {
  const sliderWrappers = document.querySelectorAll(".lightGallery-wapper");

  let sliderGrabbed = false;
  let isGrab = false;

  sliderWrappers.forEach((sliderWrapper) => {
    sliderWrapper.addEventListener("mousedown", (e) => {
      e.preventDefault();
      sliderWrapper.style.cursor = "grabbing";
      sliderGrabbed = true;
    });

    sliderWrapper.addEventListener("mouseleave", (e) => {
      e.preventDefault();

      sliderGrabbed = false;
      sliderWrapper.style.cursor = "grab";
    });

    sliderWrapper.addEventListener("mouseup", (e) => {
      e.preventDefault();

      sliderGrabbed = false;
      sliderWrapper.style.cursor = "grab";
    });
    sliderWrapper.addEventListener("mousemove", (e) => {
      isGrab = true;
      e.preventDefault();

      if (sliderGrabbed) {
        sliderWrapper.style.cursor = "grab";
        sliderWrapper.scrollLeft -= e.movementX;
      }
    });
  });

  setTimeout(() => (isGrab = false), 500);

  return isGrab;
}
