function inputField(inputId) {
  const inputFieldText = document.getElementById(inputId);
  const inputValue = parseFloat(inputFieldText.value);
  return inputValue;
}
function triangleArea() {
  const Base = inputField("base");
  const Height = inputField("height");
  const area = 0.5 * Base * Height;
  console.log(area);
}

function rectangleArea() {
  const Width = inputField("width");
  const Length = inputField("length");
  const area = Width * Length;
  console.log(area);
}

function ParallelogramArea() {
  const Base = inputField("para-base");
  const Height = inputField("para-height");
  const area = Base * Height;
  console.log(area);
}

function RhombusArea() {
  const D1 = inputField("side1");
  const D2 = inputField("side2");
  const area = 0.5 * D1 * D2;
  console.log(area);
}
function pentagonArea() {
  const p = inputField("side-a");
  const b = inputField("side-b");
  const area = 0.5 * p * b;
  console.log(area);
}
function ellipseArea() {
  const a = inputField("ellipse-a");
  const b = inputField("ellipse-b");
  const area = Math.PI * a * b;
  console.log(area.toFixed(2));
}
