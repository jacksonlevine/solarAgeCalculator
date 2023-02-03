export class asciiMap extends Map {
  constructor() {
    super();
    this.bigLetters = new Map();
  }

  setArray(string, width, height, x, y) {
    for(let j = height-1; j > -1; j-=1) {
      for(let i = 0; i < width; i+=1) {
        let spotX = i+x;
        let spotY = j+y;
        let stringSnippet = string[(((height-1)*width)-(j*width))+i];
        if(stringSnippet != "0") {
          this.set(spotX+','+spotY, stringSnippet);
        }
      }
    }
  }
}