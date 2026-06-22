const generateBtn = document.getElementById("generate-btn");
const color = document.querySelectorAll(".color");
const hexValues = document.querySelectorAll(".hex-value");
const copyBtn = document.querySelectorAll(".copy-btn");
const copyAlert = document.querySelector(".copy-alert");
const generatePelette = () => {
  color.forEach((col, index) => {
    const randomColor = generateRandomColor();
    col.style.backgroundColor = generateRandomColor();
    hexValues[index].textContent = randomColor;
    col.addEventListener("click", () => {
      navigator.clipboard.writeText(hexValues[index].textContent);
      copyAlert.classList.add("show");
      setTimeout(() => {
        copyAlert.classList.remove("show");
      }, 1500);
    });
  });
};

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * letters.length);
    color += letters[randomNumber];
  }
  return color;
};
generateBtn.addEventListener("click", generatePelette);
copyBtn.forEach((copy) => {
  copy.addEventListener("click", () => {
    const color = copy.previousElementSibling.textContent;

    navigator.clipboard.writeText(color);
    copy.classList.remove("fa-copy", "far");
    copy.classList.add("fa-check", "fas");

    setTimeout(() => {
      copy.classList.add("fa-copy", "far");
      copy.classList.remove("fa-check", "fas");
    }, 1500);
  });
});

generatePelette();
