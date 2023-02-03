import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { asciiMap } from './../src/asciiMap.js';

window.addEventListener("load", function() {
  let displaySpot = document.getElementById("mainDisplay");
  let userY = 0;
  let uiMap = buildMap();
  window.addEventListener('keydown', (event) => {
    switch(event.key) {
    case "w": case "ArrowUp":
      userY += 1;
      break;
    case "s": case "ArrowDown":
      userY -= 1;
      break;
    default:
      break;
    }
  });
  window.setInterval(()=> {
    display(displaySpot, userY, uiMap);
  }, 50);
});

function display(displaySpot, userY, uiMap) {
  displaySpot.innerHTML = buildString(userY, uiMap);
}

function buildString(userY, uiMap) {
  let screenWidth = window.innerWidth/16;
  let screenHeight = 40;
  let string = "";
  for(let j = screenHeight + userY; j > 0 + userY; j-=1) {
    for(let i = 0; i < screenWidth; i+=1) {
      if(uiMap.has(i+","+j)) {
        if(uiMap.get(i+","+j) == "@") {
          string += `<span class="red">${uiMap.get(i+","+j)}</span>`;
        }
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
  let string = "Super Galactic Age Calculator";
  string.split(" ").forEach((element, index) => {
    for(let i = 0; i < element.length; i+=1) {
      if(element[i] != " ") {
        map.setArray(map.bigLetters.get(element[i].toLowerCase()), 7, 7, 0+(i*8), 30 - (index*10));
      }
    }
  });
  
  return map;
}
