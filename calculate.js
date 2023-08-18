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
  addCalculationArea("Triangle", area.toFixed(2));
}

function rectangleArea() {
  const Width = inputField("width");
  const Length = inputField("length");
  const area = Width * Length;
  console.log(area);
  addCalculationArea("Rectangle", area.toFixed(2));
}

function ParallelogramArea() {
  const Base = inputField("para-base");
  const Height = inputField("para-height");
  const area = Base * Height;
  console.log(area);
  addCalculationArea("Parallelogram", area.toFixed(2));
}

function RhombusArea() {
  const D1 = inputField("side1");
  const D2 = inputField("side2");
  const area = 0.5 * D1 * D2;
  console.log(area);
  addCalculationArea("Rhombus", area.toFixed(2));
}
function pentagonArea() {
  const p = inputField("side-a");
  const b = inputField("side-b");
  const area = 0.5 * p * b;
  console.log(area);
  addCalculationArea("Pentagon", area.toFixed(2));
}
function ellipseArea() {
  const a = inputField("ellipse-a");
  const b = inputField("ellipse-b");
  const area = Math.PI * a * b;
  console.log(area.toFixed(2));
  addCalculationArea("Ellipse", area.toFixed(2));
}

function addCalculationArea(areaType, area) {
  const add = document.getElementById("AddArea");
  const p = document.createElement("p");
  const count = add.childElementCount;
  p.classList.add("my-4");
  p.classList.add("text-center");
  p.innerHTML = `${count + 1}.  ${areaType}  ${area} cm<sup>2</sup>    <button
                  
                  class="btn ml-3 text-white h-[28px] w-40 font-bold text-sm btn-primary rounded-md border-none bg-[#1090D8]"
                >
                  Covert to m<sup>2</sup>
                </button>`;
  add.append(p);
}
