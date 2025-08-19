function Converter(){
    let fahrenheit = parseFloat(document.getElementById("input-field").value);
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`Today's Temperature: ${fahrenheit} Degrees Fahrenheit, ${celsius.toFixed(2)} Degrees Celsius`);
}