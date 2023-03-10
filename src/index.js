import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { asciiMap } from './../src/asciiMap.js';
import { SolarAge } from './../src/solarAge.js';

window.addEventListener("load", function () {
  let displaySpot = document.getElementById("mainDisplay");
  let userY = 0;
  let uiMap = buildMap(true);
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    let homePlanet = document.querySelector("option:checked").id;
    let pastFutureAge = parseInt(document.getElementById("pastFutureAge").value);
    uiMap = buildMap(false, age, homePlanet, pastFutureAge);
  });
  window.addEventListener('keydown', (event) => {
    switch (event.key) {
    case "w": case "ArrowUp":
      if (userY < 0) {
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
  window.setInterval(() => {
    display(displaySpot, userY, uiMap);
  }, 50);
});

function display(displaySpot, userY, uiMap) {
  displaySpot.innerHTML = buildString(userY, uiMap);
}

function buildString(userY, uiMap) {
  let screenWidth = window.innerWidth / 16;
  let screenHeight = 60;
  let string = "";
  let leftMargin = 9;
  for (let j = screenHeight + userY; j > 0 + userY; j -= 1) {
    for (let i = -leftMargin; i < screenWidth; i += 1) {
      if (uiMap.has(i + "," + j)) {
        if (uiMap.get(i + "," + j) == "@") {
          string += `<span class="red">${uiMap.get(i + "," + j)}</span>`;
        } else
        if (uiMap.get(i + "," + j) == "%") {
          string += `<span class="blue">${uiMap.get(i + "," + j)}</span>`;
        } else
        if (uiMap.get(i + "," + j) == "#") {
          string += `<span class="green">${uiMap.get(i + "," + j)}</span>`;
        } else
        if (uiMap.get(i + "," + j) == "$") {
          string += `<span class="yellow">${uiMap.get(i + "," + j)}</span>`;
        } else {
          string += uiMap.get(i + "," + j);
        }
      } else {
        string += ".";
      }
    }
    string += "\n";
  }
  return string;
}

function buildMap(init, age, homePlanet, pastFutureAge) {
  let map = new asciiMap();
  let string = "Super Galactic Age Calculator";
  let yHead = 50;

  let future = (pastFutureAge >= age);

  string.split(" ").forEach((element) => {
    for (let i = 0; i < element.length; i += 1) {
      if (element[i] != " ") {
        map.setArray(map.bigLetters.get(element[i].toLowerCase()), 7, 7, 0 + (i * 8), yHead);
      }
    }
    yHead -= 8;
  });

  Array.from("Please press the down arrow or S to scroll down.").forEach((char, index) => {
    map.set(index + "," + yHead, char);
  });

  yHead -= 6;
  if (!init) {
    let planetArt = new Map([
      ["earth",
        "0%##%0" +
        "####%%" +
        "#%##%#" +
        "%%%#%#" +
        "%%%##%" +
        "0%%#%0"],
      ["pluto",
        "0=@==0" +
        "==@@==" +
        "==@@@=" +
        "@==@@=" +
        "@@=@==" +
        "0@===0"],
      ["neptune",
        "0%%%%0" +
        "%%%%%%" +
        "%%%%%%" +
        "%%%%%%" +
        "%%%%%%" +
        "0%%%%0"],
      ["mars",
        "0@@@@0" +
        "@@@@@@" +
        "@@@@@@" +
        "@@@@@@" +
        "@@@@@@" +
        "0@@@@0"],
      ["venus",
        "0####0" +
        "######" +
        "######" +
        "######" +
        "######" +
        "0####0"],
      ["saturn",
        "0====0" +
        "======" +
        "======" +
        "@@@@@@" +
        "======" +
        "0====0"],
      ["uranus",
        "0####0" +
        "@@@@@@" +
        "######" +
        "@@@@@@" +
        "######" +
        "0####0"],
      ["jupiter",
        "0$$$$0" +
        "$$$$$$" +
        "$$$$$$" +
        "@@@@@@" +
        "$$$$$$" +
        "0$$$$0"],
      ["mercury",
        "0@@@@0" +
        "$$@@$$" +
        "$@@$@$" +
        "@@@@@@" +
        "@$$@@$" +
        "0$@@$0"],
    ]);
    let xIndex = 0;
    Array.from(`Your age is ${age} years on planet ${homePlanet}.`).forEach((char, index) => {
      map.set(index + "," + yHead, char);
      xIndex = index;
    });
    if (planetArt.has(homePlanet)) {
      map.setArray(planetArt.get(homePlanet), 6, 6, xIndex + 1, yHead - 3);
    }
    yHead -= 7;
    let solar = new SolarAge("earth");
    let offset = false;
    solar.planetList.forEach((value, key) => {
      xIndex = 0;
      offset = !offset;
      if (key != homePlanet) {
        solar.planet = key;
        Array.from(`Your age is ${solar.yearsPassed(0, age, homePlanet).toFixed(2)} years on planet ${key}.`).forEach((char, index) => {
          map.set(((offset) ? 20 : 0) + index + "," + yHead, char);
          xIndex = index + ((offset) ? 20 : 0);
        });
        if (planetArt.has(key)) {
          map.setArray(planetArt.get(key), 6, 6, xIndex + 1, yHead - 3);
        }

        yHead -= 2;
        Array.from(`One day on ${key} is ${value} hours.`).forEach((char, index) => {
          map.set(((offset) ? 20 : 0) + index + "," + yHead, char);
        });
        yHead -= 7;
      }
    });
    yHead -=6;
    let date = new Date();
    let explainString = future ? `From now, ${date.toLocaleString('en-US', {weekday: 'long', month: 'long', year: 'numeric'})}, until you are age ${pastFutureAge} in ${homePlanet} years:` : `Since you were age ${pastFutureAge} in ${homePlanet} years:`;
    Array.from(explainString).forEach((element, index) => {
      map.set(index+","+yHead, element);
    });
    yHead -=9;
    solar.planetList.forEach((value, key) => {
      xIndex = 0;
      offset = !offset;
      if (key != homePlanet) {
        solar.planet = key;
        Array.from((future ? `${Math.abs(solar.yearsPassed(pastFutureAge, age, homePlanet)).toFixed(2)} years will have passed on ${key}.`: `${solar.yearsPassed(pastFutureAge, age, homePlanet).toFixed(2)} years have passed on ${key}.`)).forEach((char, index) => {
          map.set(((offset) ? 20 : 0) + index + "," + yHead, char);
          xIndex = index + ((offset) ? 20 : 0);
        });
        if (planetArt.has(key)) {
          map.setArray(planetArt.get(key), 6, 6, xIndex + 1, yHead - 3);
        }
        yHead -= 9;
      }
    });
    yHead -= 15;
    let endString = new String("END OF TRANSMISSION");
    endString.split(" ").forEach((element) => {
      for (let i = 0; i < element.length; i += 1) {
        if (element[i] != " ") {
          map.setArray(map.bigLetters.get(element[i].toLowerCase()), 7, 7, 0 + (i * 8), yHead);
        }
      }
      yHead -= 8;
    });

  } else {
    Array.from("SUBMIT YOUR AGE AND HOME PLANET TO BEGIN!").forEach((char, index) => {
      map.set(index + "," + yHead, char);
    });
    yHead -= 50;
    Array.from("There's nothing here yet. Submit an age and home planet!").forEach((char, index) => {
      map.set(index + "," + yHead, char);
    });
    let endString = new String("END OF TRANSMISSION");
    yHead -= 15;
    endString.split(" ").forEach((element) => {
      for (let i = 0; i < element.length; i += 1) {
        if (element[i] != " ") {
          map.setArray(map.bigLetters.get(element[i].toLowerCase()), 7, 7, 0 + (i * 8), yHead);
        }
      }
      yHead -= 8;
    });
  }

  return map;
}
