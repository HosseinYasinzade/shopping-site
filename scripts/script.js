const slide = document.getElementsByClassName("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dot = document.querySelectorAll(".dot");

let n = 0;

const hidden = function () {
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.remove("active");
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("dot-active");
  }
};

const goNext = () => {
  n++;
  if (n > slide.length - 1) {
    n = 0;
  }
  hidden();
  slide[n].classList.add("active");
  dot[n].classList.add("dot-active");
};

next.addEventListener("click", goNext);
setInterval(goNext, 3000);

prev.addEventListener("click", function () {
  n--;
  if (n < 0) {
    n = slide.length - 1;
  }
  hidden();
  slide[n].classList.add("active");
});

for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", () => {
    hidden();
    n = i;
    dot[i].classList.add("dot-active");
    slide[i].classList.add("active");
  });
}
