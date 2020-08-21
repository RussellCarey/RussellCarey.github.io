//form_factor -- May return any of these values: Desktop, Tablet, Smartphone, Feature Phone, Smart-TV, Robot, Other non-Mobile, Other Mobile

let device = 4;
const cross = document.getElementById("cross");
const test = document.getElementById("test");
const boxDiv = document.getElementById("boxdiv");
const boxes = document.querySelectorAll(".colorboxes__colorbox");
const text = document.querySelectorAll(".colorboxes__colorbox__text");
const back = document.getElementById("back");

if (WURFL.form_factor === "Tablet") {
  device = 1;
} else if (WURFL.form_factor === "Smartphone") {
  device = 2;
} else if (WURFL.form_factor === "Desktop") {
  device = 0;
}

// gsap.to("h2.title", {duration: 1, opacity: 0.3});
cross.addEventListener("click", () => {
  location.reload();
});

addOriginal();
function addOriginal() {
  boxes.forEach((e) => {
    e.addEventListener("click", partOne);
  });
}

function increaseBoxesHeight(box) {
  gsap.to(box, {
    width: "100vw",
    height: "100vh",
    onComplete: box.classList.add("bigBoxes"),
  });

  gsap.to(cross, { opacity: 1 });
}

function scaleBoxes(e) {
  e.style.zIndex = "999";
  text.forEach((t) => {
    gsap.to(t, { opacity: 0, duration: 0.05 });
  });
  gsap.to(e, { delay: 0.8, duration: 1.2, scaleX: 10 });
  gsap.to(test, { delay: 1, x: 0 });
  gsap.to(test, {
    delay: 1.9,
    backgroundColor: "white",
    duration: 1,
    onComplete: () => {
      test.style.overflowY = "scroll";
    },
  });
  cross.style.display = "none";
  cross.style.opacity = "0";
}

function fadeInText() {
  gsap.to(text[0], { opacity: 1, delay: 1.1 });
  gsap.to(text[1], { opacity: 1, delay: 1.4 });
  gsap.to(text[2], { opacity: 1, delay: 1.7 });
  gsap.to(text[3], { opacity: 1, delay: 2.0 });
  gsap.to(text[4], { opacity: 1, delay: 2.8 });
}

function partOne() {
  boxes.forEach((x) => {
    increaseBoxesHeight(x);
    setTimeout(() => {
      x.removeEventListener("click", partOne);
      x.addEventListener("click", scaleBoxes.bind(null, x));
      backButton(back);
    }, 2000);
  });
  fadeInText();
}

function backButton(b) {
  b.addEventListener("click", () => {
    cross.style.display = "initial";
    gsap.to(cross, { opacity: 1 });
    test.style.overflow = "hidden";
    test.style.backgroundColor = "transparent";
    gsap.to(test, { x: "-200vw" });
    boxes.forEach((e) => {
      e.removeEventListener("click", scaleBoxes.bind);
      returnBoxes(e);
    });
  });
}

function returnBoxes(e) {
  e.classList.remove("bixBoxes");
  gsap.to(e, { delay: 1, scale: 1, duration: 1 });
  setTimeout(() => {
    e.style.zIndex = "500";
  }, 3000);
  text.forEach((t) => {
    gsap.to(t, { delay: 2, duration: 1.5, opacity: 1 });
  });
}
