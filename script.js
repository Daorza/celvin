const menuSelect = document.getElementById('menuSelect');
const inputSection = document.getElementById('inputSection');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');
const suhuInput = document.getElementById('suhuInput');

let selectedMenu = "";

// Saat user memilih menu
menuSelect.addEventListener('change', function() {
    selectedMenu = this.value;
    if (selectedMenu) {
        inputSection.style.display = 'block'; // Munculkan input suhu
        suhuInput.value = ''; // Kosongkan input suhu
        result.innerText = ''; // Kosongkan hasil
    } else {
        inputSection.style.display = 'none';
        suhuInput.value = '';
        result.innerText = '';
    }
});

// Saat user klik tombol Konversi
convertBtn.addEventListener('click', function() {
    const suhu = suhuInput.value;
    if (suhu === '') {
        alert('Masukkan suhu terlebih dahulu.');
        return;
    }

    let hasil = "";

    if (selectedMenu === '1') {
        // Celcius ke Kelvin
        const kelvin = parseFloat(suhu) + 273.15;
        hasil = `${suhu}°C = ${kelvin.toFixed(2)} K`;
    } else if (selectedMenu === '2') {
        // Kelvin ke Celcius
        const celcius = parseFloat(suhu) - 273.15;
        hasil = `${suhu} K = ${celcius.toFixed(2)}°C`;
    } else {
        hasil = "Menu tidak valid.";
    }

    result.innerText = hasil;
});