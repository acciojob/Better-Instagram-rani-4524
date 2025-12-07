let dragged = null;
const boxes = document.querySelectorAll(".image");

boxes.forEach((box) => {
  box.addEventListener("dragstart", () => {
    dragged = box;
    box.classList.add("selected");
  });

  box.addEventListener("dragend", () => {
    box.classList.remove("selected");
  });

  box.addEventListener("dragover", (event) => {
    event.preventDefault(); // allow drop
  });

  box.addEventListener("drop", (e) => {
    e.preventDefault();
    if (dragged !== box) {
      // get current background images from computed style
      const draggedBg = getComputedStyle(dragged).backgroundImage;
      const boxBg = getComputedStyle(box).backgroundImage;

      // set them as inline styles (swap)
      dragged.style.backgroundImage = boxBg;
      box.style.backgroundImage = draggedBg;
    }
  });
});
