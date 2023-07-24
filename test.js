/**
 * Move Horizontal Scroll
 * @param {Event} e
 * @param {Boolean} isLeft
 *
 * @returns void
 *
 */
const moveHandler = (e, isLeft = false) => {
  const elemList = document.getElementById("list");
  if (isLeft) {
    elemList.scrollLeft -= 50;
  } else {
    elemList.scrollLeft += 50;
  }
  e.preventDefault();
};
