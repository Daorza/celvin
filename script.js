const suhuInput = document.getElementById('suhuInput');
const result = document.getElementById('result');
const flipCard = document.getElementById('flipCard');
const modeTitle = document.getElementById('modeTitle');

let mode = "CtoK"; // Default: Celcius ke Kelvin

function toggleMode() {
  mode = mode === "CtoK" ? "KtoC" : "CtoK";
  modeTitle.innerText = mode === "CtoK" ? "Celcius ke Kelvin" : "Kelvin ke Celcius";
  suhuInput.placeholder = 'Masukkan suhu dalam ' + (mode === "CtoK" ? "Celcius" : "Kelvin");
  suhuInput.value = "";
  result.innerText = "";
}

function convert() {
  const value = parseFloat(suhuInput.value);
  if (isNaN(value)) {
    alert("Masukkan angka yang valid!");
    return;
  }

  if (mode === "KtoC" && value < 0) {
    alert("Suhu Kelvin tidak boleh kurang dari 0!");
    return;
  }

  const hasil = mode === "CtoK" 
      ? `${value}°C = ${(value + 273.15).toFixed(2)}K`
      : `${value}K = ${(value - 273.15).toFixed(2)}°C`;

  result.innerText = hasil;
  flipCard.classList.add("flipped");
}

function goBack() {
  flipCard.classList.remove("flipped");
}
