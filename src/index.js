import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { asciiMap } from './../src/asciiMap.js';

window.addEventListener("load", function() {
  let displaySpot = document.getElementById("mainDisplay");
  let userY = 0;
  let uiMap = buildMap();
  window.setInterval(()=> {
    display(displaySpot, userY, uiMap);
  }, 50);
});

function display(displaySpot, userY, uiMap) {
  displaySpot.innerHTML = buildString(userY, uiMap);
}

function buildString(userY, uiMap) {
  let screenWidth = 40;
  let screenHeight = 40;
  let string = "";
  for(let j = screenHeight + userY; j > 0 + userY; j-=1) {
    for(let i = 0; i < screenWidth; i+=1) {
      if(uiMap.has(i+","+j)) {
        string += uiMap.get(i+","+j);
      } else {
        string += ".";
      }
    }
    string += "\n";
  }
  return string;
}

function buildMap() {
  let map = new asciiMap();
  
  return map;
}
