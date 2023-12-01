function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var gender = document.getElementById('gender').value;
  var age = parseInt(document.getElementById('age').value);

  if (isNaN(weight) || isNaN(height) || isNaN(age) || height === 0) {
    alert('Bitte geben Sie gültige Werte ein.');
    return;
  }

  //meter zu centis
  var heightInMeters = height / 100;

  var bmi;
  if (gender === 'male') {
    bmi = calculateBMIMale(weight, heightInMeters, age);
  } else {
    bmi = calculateBMIFemale(weight, heightInMeters, age);
  }

  displayResult(weight, height, age, bmi);
}

function calculateBMIMale(weight, height, age) {
  // mönner
  return weight / (height * height) + age / 10;
}

function calculateBMIFemale(weight, height, age) {
  // frauen
  return weight / (height * height) + age / 10;
}

function displayResult(weight, height, age, bmi) {
  var resultDiv = document.getElementById('result');
  var resultText;
  var color;

  if (bmi < 18.5) {
    resultText = 'Untergewicht';
    color = '#e74c3c';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText = 'Normalgewicht';
    color = '#2ecc71';
  } else {
    resultText = 'Übergewicht';
    color = '#e74c3c';
  }


  var tableHTML =
    `<table><tr><td>Gewicht</td><td>${weight} kg</td></tr>` +
    `<tr><td>Grösse</td><td>${height} cm</td></tr>` +
    `<tr><td>Geschlecht</td><td>${gender}</td></tr>` +
    `<tr><td>Alter</td><td>${age} Jahre</td></tr>` +
    `<tr><td>BMI</td><td>${bmi.toFixed(2)}</td></tr></table>`;

  resultDiv.innerHTML = tableHTML + '<br>' + 'Ihr BMI: ' + bmi.toFixed(2) + ' - ' + resultText;
  resultDiv.style.color = color;
}

function resetForm() {
  document.getElementById('bmiForm').reset();
  document.getElementById('result').innerHTML = '';
}

function handleEnter(event) {
  if (event.key === 'Enter') {
    calculateBMI();
  }
}
