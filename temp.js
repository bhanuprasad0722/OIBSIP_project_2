function convert() {
    // Preventing form submission
    event.preventDefault();
    
    // Getting the input values
    const temperature = parseFloat(document.getElementById('num').value);
    const isCelsius = document.getElementById('celsius').checked;
    const isFahrenheit = document.getElementById('fahrenheit').checked;

    let result;
    if (isCelsius) {
        // Converting Celsius to Fahrenheit
        result = (temperature * 9/5) + 32;
        document.getElementById('result1').value = `${result.toFixed(2)} °F`;
    } else if (isFahrenheit) {
        //  Converting Fahrenheit to Celsius
        result = (temperature - 32) * 5/9;
        document.getElementById('result1').value = `${result.toFixed(2)} °C`;
    } else {
        alert('Please select a conversion type.');
        return;
    }
}
