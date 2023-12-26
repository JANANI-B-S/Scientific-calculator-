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
        // Extract the base and number from the display
        const [base, number] = display.innerText.split("log");
        // Perform logarithmic operation
        display.innerText = Math.log10(Number(number)) / Math.log10(Number(base));
      } else if (display.innerText.includes("ln")) {
        // Perform natural logarithmic operation
        const number = display.innerText.replace("ln", "");
        display.innerText = Math.log(Number(number));
      } else if (display.innerText.includes("tan")) {
        // Perform tangent inverse operation
        const number = display.innerText.replace("tan", "");
        display.innerText = Math.atan(Number(number));
      } else if (display.innerText.includes("sin")) {
        // Perform sine operation
        const number = display.innerText.replace("sin", "");
        display.innerText = Math.sin(Number(number));
      } else if (display.innerText.includes("asin")) {
        // Perform inverse sine operation
        const number = display.innerText.replace("asin", "");
        display.innerText = Math.asin(Number(number));
      } else if (display.innerText.includes("cos")) {
        // Perform cosine operation
        const number = display.innerText.replace("cos", "");
        display.innerText = Math.cos(Number(number));
      } else if (display.innerText.includes("acos")) {
        // Perform inverse cosine operation
        const number = display.innerText.replace("acos", "");
        display.innerText = Math.acos(Number(number));
      } else if (display.innerText.includes("sqrt")) {
        // Perform square root operation
        const number = display.innerText.replace("sqrt", "");
        display.innerText = Math.sqrt(Number(number));
      } else if (display.innerText.includes("square")) {
        // Perform square operation
        const number = display.innerText.replace("square", "");
        display.innerText = Math.pow(Number(number), 2);
      } else if (display.innerText.includes("rad")) {
        // Convert degrees to radians
        const number = display.innerText.replace("rad", "");
        display.innerText = (Number(number) * Math.PI) / 180;
      } else if (display.innerText.includes("pi")) {
        // Replace pi with the mathematical constant
        display.innerText = display.innerText.replace("pi", Math.PI);
      } else {
        // Evaluate other expressions
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
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
