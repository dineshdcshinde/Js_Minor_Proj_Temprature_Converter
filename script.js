let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");

// Celcius
celsius.addEventListener("input", () => {
  let c = +celsius.value;
  // celsiusToFahrenheit
  fahrenheit.value = ((c * 9) / 5 + 32).toFixed(2);
  // celsiusToKelvin
  kelvin.value = (c + 273.15).toFixed(2);
});

// fahrenheit
fahrenheit.addEventListener("input", () => {
  let f = +fahrenheit.value;

  // fahrenheitToCelsius
  celsius.value = (((f - 32) * 5) / 9).toFixed(2);

  // fahrenheitToKelvin
  kelvin.value = (((f - 32) * 5) / 9 + 273.15).toFixed(2);
});

// kelvin
kelvin.addEventListener("input", () => {
  let k = +kelvin.value;

  // kelvinToCelsius
  celsius.value = (k - 273.15).toFixed(2);

  //  kelvinToFahrenheit
  fahrenheit.value = (((k - 273.15) * 9) / 5 + 32).toFixed(2);
});
