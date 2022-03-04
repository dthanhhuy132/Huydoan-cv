const colorArray = ["#d32f2f", "#d500f9", "#f57c00", "#66bb6a", "#42a5f5"];

export default function setColorProjectNavigation() {
  const projectTitleLink = document.querySelectorAll(
    ".project__navigation ul li"
  );

  projectTitleLink.forEach((item, index) => {
    item.style.borderColor = colorArray[index];
  });
}
