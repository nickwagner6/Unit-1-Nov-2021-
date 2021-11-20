window.addEventListener("DOMContentLoaded", domLoaded);
const errorMessage = document.querySelector("#errorMessage");
const weatherImage = document.querySelector("#weatherImage");
const cold = "assets/cold.png";
const cool = "assets/cool.png";
const warm = "assets/warm.png";

function domLoaded() {
  const celsiusInput = document.getElementById("cInput");
  const buttonConverter = document.getElementById("convertButton");
  const fahInput = document.getElementById("fInput");
  buttonConverter.addEventListener("click", myFunction);

  celsiusInput.addEventListener("keyup", () => {
    document.getElementById("fInput").value = "";
  });
  fahInput.addEventListener("keyup", () => {
    document.getElementById("cInput").value = "";
  });

  function myFunction() {
    let cTempInput = celsiusInput.value;
    let fTempInput = fahInput.value;

    if (isNaN(cTempInput) === true) {
      document.getElementById("errorMessage").innerHTML =
        cTempInput + " is not a number ";
    } else if (cTempInput !== "") {
      cTempOutput = cTempInput * (9 / 5) + 32;
      document.getElementById("fInput").value = cTempOutput;
    }

    if (isNaN(fTempInput) === true) {
      document.getElementById("errorMessage").innerHTML =
        fTempInput + " is not a number ";
    } else if (fTempInput !== "") {
      let fTempOutput = ((fTempInput - 32) * 5) / 9;
      document.getElementById("cInput").value = fTempOutput;
    }

    if (fTempInput <= 32) {
      document.getElementById("weatherImage").src = "assets/cold.png";
    } else if (fTempInput >= 32 && fTempInput <= 50) {
      document.getElementById("weatherImage").src = "assets/cool.png";
    } else if (fTempInput > 50) {
      document.getElementById("weatherImage").src = "assets/warm.png";
    }
  }
}
