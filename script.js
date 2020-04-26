// Number, Constructor, clear, Delete, Equals Buttons
const numberData = document.querySelectorAll("[data-number]");
const constructorData = document.querySelectorAll("[data-construtor]");
const equalsSymbol = document.querySelector("[data-equals]");
const deleteData = document.querySelector("[data-delete]");
const allClearData = document.querySelector("[data-all-clear]");
// Display Values and result
const currentData = document.querySelector(".current");
const finalData = document.querySelector(".final");
// Number input functionality
numberData.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText == "." && currentData.innerText == ".") return;
    if (finalData.innerText != "") {
      finalData.innerText = "";
    }
    currentData.append(button.innerText);
  });
});
// operations input functionality
constructorData.forEach((button) => {
  button.addEventListener("click", () => {
    if (finalData.innerText != "") {
      finalData.innerText = "";
    }
    currentData.append(button.innerText);
  });
});
// Final result functionality
equalsSymbol.addEventListener("click", () => {
  var result = 0;
  result = eval(currentData.innerText);
  finalData.append(result);
  currentData.innerText = "";
  finalData.style.fontSize = "50px";
  finalData.style.transition = "all 0.1s";
});
// Clear Display
allClearData.addEventListener("click", () => {
  finalData.innerText = "";
  currentData.innerText = "";
});
// Delete value
deleteData.addEventListener("click", () => {
  var str = currentData.innerText;
  currentData.innerText = str.substring(0, str.length - 1);
});
