let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

function randomRotation() {
  return Math.floor(Math.random() * 360);
}

// BOX 1
box1.addEventListener("mouseenter", () => {
  box1.style.backgroundColor = randomColor();
});

box1.addEventListener("mouseleave", () => {
  box1.style.backgroundColor = "white";
});

// BOX 2
box2.addEventListener("mouseenter", () => {
  box2.innerText = randomNumber();
  box2.style.backgroundColor = randomColor();
});

box2.addEventListener("mouseleave", () => {
  box2.innerText = "2";
  box2.style.backgroundColor = "white";
});

// BOX 3
box3.addEventListener("mouseenter", () => {
  box1.innerText = "Box 3 Hovered";

  box1.style.backgroundColor = randomColor();
  box2.style.backgroundColor = randomColor();

  box2.innerText = randomNumber();

  box3.style.transform = "scale(1.1)";
});

box3.addEventListener("mouseleave", () => {
  box1.innerText = "1";
  box2.innerText = "2";

  box1.style.backgroundColor = "white";
  box2.style.backgroundColor = "white";

  box3.style.transform = "scale(1)";
});

// BOX 4
box4.addEventListener("click", () => {
  box1.innerText = "Box 4 Clicked";
  box2.innerText = randomNumber();
  box3.innerText = randomNumber();
  box4.innerText = randomNumber();

  box1.style.backgroundColor = randomColor();
  box2.style.backgroundColor = randomColor();
  box3.style.backgroundColor = randomColor();
  box4.style.backgroundColor = randomColor();

  // box1.style.transform = `rotate(${randomRotation()}deg)`;
  // box2.style.transform = `rotate(${randomRotation()}deg)`;
  // box3.style.transform = `rotate(${randomRotation()}deg)`;
  // box4.style.transform = `rotate(${randomRotation()}deg)`;

  setTimeout(() => {
    box1.innerText = "1";
    box2.innerText = "2";
    box3.innerText = "3";
    box4.innerText = "4";

    box1.style.backgroundColor = "white";
    box2.style.backgroundColor = "white";
    box3.style.backgroundColor = "white";
    box4.style.backgroundColor = "white";

    // box1.style.transform = "rotate(0deg)";
    // box2.style.transform = "rotate(0deg)";
    // box3.style.transform = "rotate(0deg)";
    // box4.style.transform = "rotate(0deg)";
  }, 1500);
});
