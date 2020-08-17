//form_factor -- May return any of these values: Desktop, Tablet, Smartphone, Feature Phone, Smart-TV, Robot, Other non-Mobile, Other Mobile

let device = 4;
pg = document.getElementById("page");
boxes = document.querySelectorAll(".colorboxes__colorbox");
back = document.getElementById("back");

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
      element.style.padding = "1rem";
    });
  }
});

back.addEventListener("click", () => {
  pg.classList.remove("showpage");
});

boxes.forEach((e) => {
  e.addEventListener("click", (i) => {
    largeBox(i.target);

    boxes.forEach((element) => {
      if (element != i.target) {
        element.style.height = "100%";
        element.style.width = "0%";
        element.style.padding = "0";

        if (device === 1 || device === 2) {
          element.children[0].style.opacity = "0";
          element.children[0].style.display = "none";
        }
      }
    });
  });
});

function largeBox(box) {
  box.style.height = "100vh";
  box.style.width = "100vw";

  if (device === 1 || device === 2) {
    if (box.children[0]) {
      box.children[0].style.opacity = "1";
    }
  }

  setTimeout(() => {
    pg.classList.add("showpage");
  }, 800);
}
