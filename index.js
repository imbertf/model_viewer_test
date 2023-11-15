const modelViewerColor = document.querySelector("model-viewer#color");
          
document.querySelector('#color-controls').addEventListener('click', (event) => {
  const colorString = event.target.dataset.color;
  const [material] = modelViewerColor.model.materials;
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});

const getButton = document.querySelectorAll('button')

for (let button of getButton) {
  const color = button.dataset.color

  switch (color) {
    case "#ff0000":
      button.style.background="#ff0000"
      break;
    case "#00ff00":
      button.style.background="#00ff00"
      break;
    case "#0000ff":
      button.style.background="#0000ff"
      break;
  
    default:
      break;
  }
}