import { asciiMap } from './../src/asciiMap.js';

describe('asciiMap object', () => {

  let newMap;
  beforeEach(()=> {
    newMap = new asciiMap();
  });

  test('it should create an object that extends the Map class', ()=> {
    expect(Object.getPrototypeOf(newMap).toString()).toEqual('[object Map]');
  });

  describe('setArray method', () => {
    test('it should take in string, height, width, x, and y, and set a grid of positions in the map based on the numbers given', () => {
      let string =
      "@#" +
      "#@";
      newMap.setArray(string, 2, 2, 0, 0);
      expect(newMap.get(0+","+0)).toEqual("#");
      expect(newMap.get(1+","+0)).toEqual("@");
      expect(newMap.get(0+","+1)).toEqual("@");
      expect(newMap.get(1+","+1)).toEqual("#");
    });
  });
});