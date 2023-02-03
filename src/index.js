import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { asciiMap } from './../src/asciiMap.js';
import { SolarAge } from './../src/solarAge.js';

window.addEventListener("load", function() {
  let displaySpot = document.getElementById("mainDisplay");
  let userY = 0;
  let uiMap = buildMap(true);
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    let homePlanet = document.querySelector("option:checked").id;
    uiMap = buildMap(false, age, homePlanet);
  });
  window.addEventListener('keydown', (event) => {
    switch(event.key) {
    case "w": case "ArrowUp":
      if(userY < 0) {
        userY += 1;
      }
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
  let screenHeight = 60;
  let string = "";
  for(let j = screenHeight + userY; j > 0 + userY; j-=1) {
    for(let i = 0; i < screenWidth; i+=1) {
      if(uiMap.has(i+","+j)) {
        if(uiMap.get(i+","+j) == "@") {
          string += `<span class="red">${uiMap.get(i+","+j)}</span>`;
        } else {
          string += uiMap.get(i+","+j);
        }
      } else {
        string += ".";
      }
    }
    string += "\n";
  }
  return string;
}

function buildMap(init, age, homePlanet) {
  let map = new asciiMap();
  let string = "Super Galactic Age Calculator";
  let yHead = 50;
  string.split(" ").forEach((element) => {
    for(let i = 0; i < element.length; i+=1) {
      if(element[i] != " ") {
        map.setArray(map.bigLetters.get(element[i].toLowerCase()), 7, 7, 0+(i*8), yHead);
      }
    }
    yHead -= 8;
  });

  Array.from("Please press S to scroll down.").forEach((char, index)=>{
    map.set(index+","+yHead, char);
  });

  yHead -= 6;
  if(!init) {
    Array.from(`Your age is ${age} years on planet ${homePlanet}.`).forEach((char, index)=>{
      map.set(index+","+yHead, char);
    });
    yHead -=4;
    let solar = new SolarAge("earth");
    let offset = false;
    solar.planetList.forEach((value, key) => {
      offset = !offset;
      if(key != homePlanet) {
        solar.planet = key;
        Array.from(`Your age is ${solar.yearsPassed(0, age, homePlanet).toFixed(2)} years on planet ${key}.`).forEach((char, index)=>{
          map.set(((offset) ? 20 : 0)+ index+","+yHead, char);
        });
        yHead-=2;
        Array.from(`One day on ${key} is ${value} hours.`).forEach((char, index)=>{
          map.set(((offset) ? 20 : 0)+index+","+yHead, char);
        });
        yHead-=4;
      }
    });

  } else {
    Array.from("SUBMIT YOUR AGE AND HOME PLANET TO BEGIN!").forEach((char, index)=>{
      map.set(index+","+yHead, char);
    });
    yHead -= 50;
    Array.from("There's nothing here yet. Submit an age and home planet!").forEach((char, index)=>{
      map.set(index+","+yHead, char);
    });
  }
  
  return map;
}
