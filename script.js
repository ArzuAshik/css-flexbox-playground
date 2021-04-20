// menu
document.querySelector(".open").addEventListener("click", () => {
  document.querySelector("#controller").classList.toggle("show");
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector("#controller").classList.toggle("show");
});

// outputContainer
const outputContainer = document.getElementById("output");

// flex direction
document.getElementById("flex-direction").addEventListener("change", (e) => {
  outputContainer.style.flexDirection = e.target.value;
});

document.getElementById("flex-wrap").addEventListener("change", (e) => {
  outputContainer.style.flexWrap = e.target.value;
});

// alignments
document.getElementById("justify-content").addEventListener("change", (e) => {
  outputContainer.style.justifyContent = e.target.value;
});

document.getElementById("align-items").addEventListener("change", (e) => {
  outputContainer.style.alignItems = e.target.value;
});

document.getElementById("align-content").addEventListener("change", (e) => {
  outputContainer.style.alignContent = e.target.value;
});

// flex elements
let selectedElement = document.getElementById("a");
const order = document.getElementById("order");
const flexBasis = document.getElementById("flex-basis");
const minWidth = document.getElementById("min-width");
const minHeight = document.getElementById("min-height");
const flexGrow = document.getElementById("flex-grow");
const flexShrink = document.getElementById("flex-shrink");

const elementSelector = document
  .getElementById("element")
  .addEventListener("change", (e) => {
    selectedElement = document.getElementById(e.target.value);

    const orderValue = selectedElement.style.order;
    order.value = orderValue;

    const flexBasisValue = selectedElement.style.flexBasis;
    flexBasis.value = flexBasisValue;

    const minWidthValue = selectedElement.style.minWidth;
    minWidth.value = minWidthValue;

    const minHeightValue = selectedElement.style.minHeight;
    minHeight.value = minHeightValue;

    const flexGrowValue = selectedElement.style.flexGrow;
    flexGrow.value = flexGrowValue || 0;

    const flexShrinkValue = selectedElement.style.flexShrink;
    flexShrink.value = flexShrinkValue || 1;
  });

order.addEventListener("change", (e) => {
  selectedElement.style.order = e.target.value;
});

flexBasis.addEventListener("change", (e) => {
  selectedElement.style.flexBasis = e.target.value;
});

minWidth.addEventListener("change", (e) => {
  selectedElement.style.minWidth = e.target.value;
});

minHeight.addEventListener("change", (e) => {
  selectedElement.style.minHeight = e.target.value;
});

flexGrow.addEventListener("change", (e) => {
  selectedElement.style.flexGrow = e.target.value;
});

flexShrink.addEventListener("change", (e) => {
  selectedElement.style.flexShrink = e.target.value;
});
