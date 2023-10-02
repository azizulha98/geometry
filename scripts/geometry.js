function triangleArea() {
  const base = getInputValue('triangle-base');
  const height = getInputValue('triangle-height');
  if (isNaN(base) || isNaN(height)) {
    alert('Please insert a number');
    return;
  }
  const calculation = (0.5 * base * height).toFixed(2);
  setElementInnerText('triangle-field', calculation)
  addToCalculationEntry('Triangle', calculation)
}

function rectangleArea() {
  const width = getInputValue('rectangle-width');
  const length = getInputValue('rectangle-length');
  if (isNaN(width) || isNaN(length)) {
    alert('Please insert a number');
    return;
  }
  const calculation = (width * length).toFixed(2);
  setElementInnerText('rectangle-field', calculation);
  addToCalculationEntry('Rectangle', calculation)
}

function parallelogramArea() {
  const base = getInputValue('parallelogram-base');
  const height = getInputValue('parallelogram-height');
  if (isNaN(base) || isNaN(height)) {
    alert('Please insert a number');
    return;
  }
  const calculation = (base * height).toFixed(2);
  setElementInnerText('parallelogram-field', calculation)
  addToCalculationEntry('Parallelogram', calculation)
}

function ellipseArea() {
  const major = getInputValue('ellipse-major');
  const minor = getInputValue('ellipse-minor');
  if (isNaN(major) || isNaN(minor)) {
    alert('Please insert a number');
    return;
  }
  const calculation = (3.14 * major * minor).toFixed(2);
  setElementInnerText('ellipse-field', calculation)
  addToCalculationEntry('Ellipse', calculation)
}

function pentagonArea() {
  const perimeter = getInputValue('pentagon-perimeter');
  const apothem = getInputValue('pentagon-apothem');
  if (isNaN(perimeter) || isNaN(apothem)) {
    alert('Please insert a number');
    return;
  }
  const calculation = (.5 * perimeter * apothem).toFixed(2);
  setElementInnerText('pentagon-field', calculation)
  addToCalculationEntry('Pentagon', calculation)
}

function rhombusArea() {
  const diagonal1 = getInputValue('rhombus-diagonal1');
  const diagonal2 = getInputValue('rhombus-diagonal2');
  if (isNaN(diagonal1) || isNaN(diagonal2)) {
    alert('Please insert a number');
    return;
  }
  const calculation = (0.5 * diagonal1 * diagonal2).toFixed(2);
  setElementInnerText('rhombus-field', calculation)

  addToCalculationEntry('Rhombus', calculation)
}

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputString = inputField.value;
  const input = parseFloat(inputString);
  return input;
}
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById('calculation-entry');
  const count = calculationEntry.childElementCount;
  const p = document.createElement('p');
  p.classList.add('my-4');
  p.classList.add('space-x-2')
  p.classList.add('px-2')
  p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-xs btn-success">Convert</button>`;
  calculationEntry.appendChild(p);
}