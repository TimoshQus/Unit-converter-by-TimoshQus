const units = {
    length: {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701
    },
    temperature: {
        celsius: value => value,
        fahrenheit: value => (value * 9/5) + 32,
        kelvin: value => value + 273.15
    },
    weight: {
        kilogram: 1,
        gram: 1000,
        milligram: 1000000,
        pound: 2.20462,
        ounce: 35.274
    }
};

function updateUnits() {
    const unitType = document.getElementById('unit-type').value;
    const inputUnit = document.getElementById('input-unit');
    const outputUnit = document.getElementById('output-unit');

    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';

    for (let unit in units[unitType]) {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        option2.value = unit;
        option2.textContent = unit;
        inputUnit.appendChild(option1);
        outputUnit.appendChild(option2);
    }
    convertUnits();
}

function convertUnits() {
    const unitType = document.getElementById('unit-type').value;
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;

    let outputValue;
    if (unitType === 'temperature') {
        outputValue = units[unitType][outputUnit](units[unitType][inputUnit](inputValue));
    } else {
        outputValue = inputValue * units[unitType][outputUnit] / units[unitType][inputUnit];
    }
    
    document.getElementById('output-value').textContent = outputValue || '';
}

document.addEventListener('DOMContentLoaded', () => {
    updateUnits();
});
