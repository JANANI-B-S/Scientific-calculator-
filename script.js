document.addEventListener("DOMContentLoaded", function () {
      const display = document.getElementById("display");
      const buttons = document.querySelectorAll("button");

      buttons.forEach((button) => {
        button.addEventListener("click", function () {
          handleButtonClick(button.id);
        });
      });

      function handleButtonClick(buttonId) {
        switch (buttonId) {
          case "clear":
            clearDisplay();
            break;
          case "equal":
            evaluateExpression();
            break;
          case "backspace":
            backspace();
            break;
          case "sqrt":
            applySquareRoot();
            break;
          case "square":
            applySquare();
            break;
          case "pi":
            appendToDisplay(Math.PI);
            break;
          case "sin":
            applyTrigFunction(Math.sin);
            break;
          case "cos":
            applyTrigFunction(Math.cos);
            break;
          case "tan":
            applyTrigFunction(Math.tan);
            break;
          case "asin":
            applyInverseTrigFunction(Math.asin);
            break;
          case "acos":
            applyInverseTrigFunction(Math.acos);
            break;
          case "atan":
            applyInverseTrigFunction(Math.atan);
            break;
          case "log":
            applyLogarithm();
            break;
          case "ln":
            applyNaturalLogarithm();
            break;
          default:
            appendToDisplay(buttonId);
            break;
        }
      }

      function clearDisplay() {
        display.innerText = "";
      }

      function evaluateExpression() {
        try {
          const result = eval(display.innerText);
          display.innerText = result;
        } catch (error) {
          display.innerText = "Error";
        }
      }

      function backspace() {
        let currentExpression = display.innerText;
        display.innerText = currentExpression.slice(0, -1);
      }

      function appendToDisplay(value) {
        display.innerText += value;
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
        const c=Math.toRadians(currentValue);
        if (!isNaN(currentValue)) {
          display.innerText = inverseTrigFunction((c) * 180) / Math.PI);
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
    });
