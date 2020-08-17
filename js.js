//form_factor -- May return any of these values: Desktop, Tablet, Smartphone, Feature Phone, Smart-TV, Robot, Other non-Mobile, Other Mobile

let device = 4;
boxes = document.querySelectorAll(".colorboxes__colorbox");

if (WURFL.form_factor === "Tablet") {
  device = 1;
} else if (WURFL.form_factor === "Smartphone") {
  device = 2;
} else if (WURFL.form_factor === "Desktop") {
  device = 0;
}

window.addEventListener("click", (l) => {
  if (!l.target.classList.contains("colorboxes__colorbox")) {
    boxes.forEach((element) => {
      element.style.height = "50%";
      element.style.width = "20%";
    });
  }
});

boxes.forEach((e) => {
  e.addEventListener("click", (i) => {
    console.log("clicked box");
    largeBox(i.target);

    boxes.forEach((element) => {
      if (element != i.target) {
        element.style.height = "50%";
        element.style.width = "10%";

        if (device === 1 || device === 2) {
          element.children[0].style.opacity = "0";
        }
      }
    });
  });
});

function largeBox(box) {
  box.style.height = "100vh";
  box.style.width = "90vw";

  if (device === 1 || device === 2) {
    box.children[0].style.opacity = "1";
  }
}
