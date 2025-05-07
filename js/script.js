const konversiSuhu = {
  // Konversi dari Celsius
  celsiusToFahrenheit: function (celsius) {
    return (celsius * 9) / 5 + 32;
  },
  celsiusToKelvin: function (celsius) {
    return celsius + 273.15;
  },
  celsiusToReamur: function (celsius) {
    return (celsius * 4) / 5;
  },

  // Konversi dari Fahrenheit
  fahrenheitToCelsius: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
  fahrenheitToKelvin: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9 + 273.15;
  },
  fahrenheitToReamur: function (fahrenheit) {
    return ((fahrenheit - 32) * 4) / 9;
  },

  // Konversi dari Kelvin
  kelvinToCelsius: function (kelvin) {
    return kelvin - 273.15;
  },
  kelvinToFahrenheit: function (kelvin) {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  },
  kelvinToReamur: function (kelvin) {
    return ((kelvin - 273.15) * 4) / 5;
  },

  // Konversi dari Reamur
  reamurToCelsius: function (reamur) {
    return (reamur * 5) / 4;
  },
  reamurToFahrenheit: function (reamur) {
    return (reamur * 9) / 4 + 32;
  },
  reamurToKelvin: function (reamur) {
    return (reamur * 5) / 4 + 273.15;
  },
};

function formatResult(value) {
  return Math.round(value * 100) / 100;
}

function konversi() {
  const inputType = document.getElementById("inputType").value;
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const resultDiv = document.getElementById("result");
  const resultC = document.getElementById("resultC");
  const resultF = document.getElementById("resultF");
  const resultK = document.getElementById("resultK");
  const resultR = document.getElementById("resultR");

  if (isNaN(inputValue)) {
    alert("Masukkan suhu dalam bentuk angka!");
    return;
  }

  let celsius, fahrenheit, kelvin, reamur;

  switch (inputType) {
    case "celsius":
      celsius = inputValue;
      fahrenheit = konversiSuhu.celsiusToFahrenheit(inputValue);
      kelvin = konversiSuhu.celsiusToKelvin(inputValue);
      reamur = konversiSuhu.celsiusToReamur(inputValue);
      break;
    case "fahrenheit":
      celsius = konversiSuhu.fahrenheitToCelsius(inputValue);
      fahrenheit = inputValue;
      kelvin = konversiSuhu.fahrenheitToKelvin(inputValue);
      reamur = konversiSuhu.fahrenheitToReamur(inputValue);
      break;
    case "kelvin":
      celsius = konversiSuhu.kelvinToCelsius(inputValue);
      fahrenheit = konversiSuhu.kelvinToFahrenheit(inputValue);
      kelvin = inputValue;
      reamur = konversiSuhu.kelvinToReamur(inputValue);
      break;
    case "reamur":
      celsius = konversiSuhu.reamurToCelsius(inputValue);
      fahrenheit = konversiSuhu.reamurToFahrenheit(inputValue);
      kelvin = konversiSuhu.reamurToKelvin(inputValue);
      reamur = inputValue;
      break;
  }

  resultC.textContent = `Hasil Konversi ke Celsius (°C): ${formatResult(
    celsius
  )}`;
  resultF.textContent = `Hasil Konversi ke Fahrenheit (°F): ${formatResult(
    fahrenheit
  )}`;
  resultK.textContent = `Hasil Konversi ke Kelvin (K): ${formatResult(kelvin)}`;
  resultR.textContent = `Hasil Konversi ke Reamur (°R): ${formatResult(
    reamur
  )}`;

  resultDiv.style.display = "block";
}
