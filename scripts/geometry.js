function triangleArea() {
  const base = getInputValue('triangle-base');
  const height = getInputValue('triangle-height');
  if (isNaN) {
    alert('Please input a number')
    return;
  }
  const calculation = (0.5 * base * height).toFixed(2);
  setElementInnerText('triangle-field', calculation)
}
function rectangleArea() {
  const width = getInputValue('rectangle-width');
  const length = getInputValue('rectangle-length');
  if (isNaN) {
    alert('Please input a number')
    return;
  }
  const calculation = (width * length).toFixed(2);
  setElementInnerText('rectangle-field', calculation);
}
function parallelogramArea() {
  const base = getInputValue('parallelogram-base');
  const height = getInputValue('parallelogram-height');
  if (isNaN) {
    alert('Please input a number')
    return;
  }
  const calculation = (base * height).toFixed(2);
  setElementInnerText('parallelogram-field', calculation)
}
function ellipseArea() {
  const base = getInputValue('ellipse-major');
  const height = getInputValue('ellipse-minor');
  if (isNaN) {
    alert('Please input a number')
    return;
  }
  const calculation = (3.14 * base * height).toFixed(2);
  setElementInnerText('ellipse-field', calculation)
}
function pentagonArea() {
  const perimeter = getInputValue('pentagon-perimeter');
  const apothem = getInputValue('pentagon-apothem');
  if (isNaN) {
    alert('Please input a number')
    return;
  }
  const calculation = (.5 * perimeter * apothem).toFixed(2);
  setElementInnerText('pentagon-field', calculation)
}
function rhombusArea() {
  const diagonal1 = getInputValue('rhombus-diagonal1');
  const diagonal2 = getInputValue('rhombus-diagonal2');
  if (isNaN) {
    alert('Please input a number')
    return;
  }
  const calculation = (0.5 * diagonal1 * diagonal2).toFixed(2);
  setElementInnerText('rhombus-field', calculation)
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