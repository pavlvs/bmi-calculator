// grab the calculate button
let calcButton = document.getElementById('btnCalc');
// add event listener to calculate button
calcButton.addEventListener('click', function () {
    // grab height and weight fro page input values
    let height = parseFloat(document.getElementById('height').value) / 100;
    let weight = parseInt(document.getElementById('weight').value);

    // check if we have clean inout i.e numbers
    if (!isNaN(height) || !isNaN(weight)) {
        let BMI = calcBMI(height, weight).toFixed(2);
        document.getElementById('output').textContent = 'Your Body Mass Index (BMI) is: ' + BMI;
    } else {
        // we really need numbers
        alert('Please enter height and weight as numbers');
    }
});

function calcBMI(height, weight) {
    let BMI = weight / Math.pow(height, 2);
    return BMI;
}