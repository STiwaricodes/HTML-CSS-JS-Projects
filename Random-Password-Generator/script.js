const input = document.getElementById("input");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const copyText = document.getElementById("copy-text");
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
function generateRandomNumber() {
  return Math.floor(Math.random() * chars.length);
}

const generatePassword = () => {
  const passwordLength = 14;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = generateRandomNumber();
    password += chars[randomNumber];
  }
  return password;
};

generateBtn.addEventListener("click", () => {
  input.value = generatePassword();
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  copyText.style.display = "inline";
  setTimeout(() => {
    copyText.style.display = "none";
  }, 1500);
});
