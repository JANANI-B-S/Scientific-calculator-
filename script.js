const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      // Check for logarithmic operations
      if (display.innerText.includes("log")) {
        const [base, number] = display.innerText.split("log");
        const result = Math.log10(Number(number)) / Math.log10(Number(base));
        display.innerText = isNaN(result) ? "Error" : result;
      } else if (display.innerText.includes("ln")) {
        const number = display.innerText.replace("ln", "");
        const result = Math.log(Number(number));
        display.innerText = isNaN(result) ? "Error" : result;
      } else if (display.innerText.includes("tan")) {
        const number = display.innerText.replace("tan", "");
        display.innerText = Math.tan((Number(number) * Math.PI) / 180);
      } else if (display.innerText.includes("sin")) {
        const number = display.innerText.replace("sin", "");
        display.innerText = Math.sin((Number(number) * Math.PI) / 180);
      } else if (display.innerText.includes("asin")) {
        const number = display.innerText.replace("asin", "");
        const result = Math.asin(Number(number)) * (180 / Math.PI);
        display.innerText = isNaN(result) ? "Error" : result;
      } else if (display.innerText.includes("cos")) {
        const number = display.innerText.replace("cos", "");
        display.innerText = Math.cos((Number(number) * Math.PI) / 180);
      } else if (display.innerText.includes("acos")) {
        const number = display.innerText.replace("acos", "");
        const result = Math.acos(Number(number)) * (180 / Math.PI);
        display.innerText = isNaN(result) ? "Error" : result;
      } else if (display.innerText.includes("sqrt")) {
        const number = display.innerText.replace("sqrt", "");
        display.innerText = Math.sqrt(Number(number));
      } else if (display.innerText.includes("square")) {
        const number = display.innerText.replace("square", "");
        display.innerText = Math.pow(Number(number), 2);
      } else if (display.innerText.includes("rad")) {
        const number = display.innerText.replace("rad", "");
        display.innerText = (Number(number) * Math.PI) / 180;
      } else if (display.innerText.includes("pi")) {
        display.innerText = display.innerText.replace("pi", Math.PI);
      } else {
        display.innerText = eval(display.innerText);
      }
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".dark");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
