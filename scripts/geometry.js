function triangleArea() {
  const base = getInputValue('triangle-base');
  const height = getInputValue('triangle-height');
  const calculation = 0.5 * base * height;
  setElementInnerText('triangle-field', calculation)
}
function rectangleArea() {
  const width = getInputValue('rectangle-width');
  const length = getInputValue('rectangle-length');
  const calculation = width * length;
  setElementInnerText('rectangle-field', calculation);
}
function parallelogramArea() {
  const base = getInputValue('parallelogram-base');
  const height = getInputValue('parallelogram-height');
  const calculation = base * height;
  setElementInnerText('parallelogram-field', calculation)
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