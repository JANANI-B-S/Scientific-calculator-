
  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id === "clear") {
        clearDisplay();
      } else if (item.id === "backspace") {
        backspace();
      } else if (item.id === "equal") {
        evaluateExpression();
      } else if (item.id === "sqrt") {
        applySquareRoot();
      } else if (item.id === "square") {
        applySquare();
      } else if (item.id === "pi") {
        addToDisplay(Math.PI);
      } else if (item.id === "sin") {
        applyTrigFunction(Math.sin);
      } else if (item.id === "cos") {
        applyTrigFunction(Math.cos);
      } else if (item.id === "tan") {
        applyTrigFunction(Math.tan);
      } else if (item.id === "asin") {
        applyInverseTrigFunction(Math.asin);
      } else if (item.id === "acos") {
        applyInverseTrigFunction(Math.acos);
      } else if (item.id === "atan") {
        applyInverseTrigFunction(Math.atan);
      } else if (item.id === "log") {
        applyLogarithm();
      } else if (item.id === "ln") {
        applyNaturalLogarithm();
      } else if (item.id === "radian") {
        convertToRadian();
      } else {
        addToDisplay(item.id);
      }
    };
  });

  const themeToggleBtn = document.querySelector(".theme-toggler");
  const calculator = document.querySelector(".dark");
  let isDark = true;

  themeToggleBtn.onclick = () => {
    toggleTheme();
  };

  function clearDisplay() {
    display.innerText = "";
  }

  function backspace() {
    let currentExpression = display.innerText.toString();
    display.innerText = currentExpression.substr(0, currentExpression.length - 1);
  }

  function evaluateExpression() {
    try {
      const result = eval(display.innerText);
      display.innerText = result;
    } catch (error) {
      display.innerText = "Error";
    }
  }

  function addToDisplay(value) {
    display.innerText += value;
  }

  function toggleTheme() {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
  }

  function applySquareRoot() {
    const currentValue = parseFloat(display.innerText);
    if (!isNaN(currentValue) && currentValue >= 0) {
      display.innerText = Math.sqrt(currentValue);
    } else {
      display.innerText = "Error";
    }
  }

  function applySquare() {
    const currentValue = parseFloat(display.innerText);
    if (!isNaN(currentValue)) {
      display.innerText = Math.pow(currentValue, 2);
    } else {
      display.innerText = "Error";
    }
  }

  function applyTrigFunction(trigFunction) {
    const currentValue = parseFloat(display.innerText);
    if (!isNaN(currentValue)) {
      display.innerText = trigFunction((currentValue * Math.PI) / 180);
    } else {
      display.innerText = "Error";
    }
  }

  function applyInverseTrigFunction(inverseTrigFunction) {
    const currentValue = parseFloat(display.innerText);
    if (!isNaN(currentValue) && currentValue >= -1 && currentValue <= 1) {
      display.innerText = (inverseTrigFunction(currentValue) * 180) / Math.PI;
    } else {
      display.innerText = "Error";
    }
  }

  function applyLogarithm() {
    const currentValue = parseFloat(display.innerText);
    if (!isNaN(currentValue) && currentValue > 0) {
      display.innerText = Math.log10(currentValue);
    } else {
      display.innerText = "Error";
    }
  }

  function applyNaturalLogarithm() {
    const currentValue = parseFloat(display.innerText);
    if (!isNaN(currentValue) && currentValue > 0) {
      display.innerText = Math.log(currentValue);
    } else {
      display.innerText = "Error";
    }
  }

  function convertToRadian() {
    const currentValue = parseFloat(display.innerText);
    if (!isNaN(currentValue)) {
      display.innerText = (currentValue * Math.PI) / 180;
    } else {
      display.innerText = "Error";
    }
  });

