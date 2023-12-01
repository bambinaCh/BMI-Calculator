function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || height === 0) {
    alert('Bitte geben Sie gültige Werte ein.');
    return;
  }

  // Convert height to meters from centimeters
  var heightInMeters = height / 100;

  var bmi = weight / (heightInMeters * heightInMeters);
  displayResult(bmi);
}

function displayResult(bmi) {
  var resultDiv = document.getElementById('result');
  var resultText;

  if (bmi < 18.5) {
    resultText = 'Untergewicht';
    resultDiv.style.color = '#e74c3c';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText = 'Normalgewicht';
    resultDiv.style.color = '#2ecc71';
  } else {
    resultText = 'Übergewicht';
    resultDiv.style.color = '#e74c3c';
  }

  resultDiv.innerHTML = 'Ihr BMI: ' + bmi.toFixed(2) + ' - ' + resultText;
}