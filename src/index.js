import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

window.addEventListener("load", function() {
  let displaySpot = document.getElementById("mainDisplay");
  let userY = 0;
  let uiMap = new Map();
  window.setInterval(()=> {
    display(displaySpot, userY);
  }, 50);
});

function display(displaySpot, userY) {
  displaySpot.innerHTML = buildString(userY);
}

function buildString(userY) {
  let screenWidth = 40;
  let screenHeight = 40;
  let string = "";
  for(let j = screenHeight + userY; j > 0 + userY; j-=1) {
    for(let i = 0; i < screenWidth; i+=1) {
      string += 
    }
  }
}
