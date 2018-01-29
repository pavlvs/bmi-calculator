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
        let message = '';
        switch (true) {
        case BMI < 18.5:
            message = 'You are underweight';
            break;
        case BMI > 18.5 && BMI < 25:
            message = 'Your weight is normal';
            break;
        case BMI > 25 && BMI < 30:
            message = 'You are overweight';
            break;
        case BMI > 30:
            message = 'You are obese';
            break;
        default:
            message = '';
            break;
        }
        document.getElementById('output').innerHTML = 'Your Body Mass Index (BMI) is: ' + BMI + '. <br>' + message + '.';
    } else {
        // we really need numbers
        alert('Please enter height and weight as numbers');
    }
});

function calcBMI(height, weight) {
    let BMI = weight / Math.pow(height, 2);
    return BMI;
}