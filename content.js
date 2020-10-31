
window.addEventListener('mouseover', highlightElement);

window.addEventListener('mouseout', lowlightElement);

window.addEventListener('contextmenu', getSimilarData)

var elements;

var selectedDataArray = [];

function getElements(classOfSelectedElement){
  elements = window.document.getElementsByClassName(`${classOfSelectedElement}`);
}

function highlightElement(e){
  var classOfSelectedElement = e.target.getAttribute("class");
  e.target.style["background-color"] = "purple";
  e.target.style["color"] = "orange";
  getElements(classOfSelectedElement);
  for(element of elements){
    element.style["background-color"] = "purple";
    element.style["color"] = "orange";
  }
  // e.target.style["font-size"] = "30px";
}

function lowlightElement(event){
  var classOfSelectedElement = event.target.getAttribute("class");
  event.target.style["background-color"] = "white";
  event.target.style["color"] = "black";
  getElements(classOfSelectedElement);
  for(element of elements){
    element.style["background-color"] = "white";
    element.style["color"] = "black";
  }
}

function getSimilarData(event){
  console.log(elements);
  for(element of elements){
    selectedDataArray.push(element.innerText);
  }
  console.log(selectedDataArray);
}

