import { asciiMap } from './../src/asciiMap.js';

describe('asciiMap object', () => {

  let newMap;
  beforeEach(()=> {
    newMap = new asciiMap();
  });

  test('it should create an object that extends the Map class', ()=> {
    expect(Object.getPrototypeOf(newMap).toString()).toEqual('[object Map]');
  });

  test('it should have the bigLetters property that is a map of lowercase letters to 7x7 ascii block letters', ()=> {
    expect(newMap.bigLetters.get("s")).toEqual(
      "0@@@@@@" +
      "@000000" +
      "@000000" +
      "0@@@@@0" +
      "000000@" +
      "000000@" +
      "@@@@@@0"
    );
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
    test('it should skip adding any 0 characters that are in the string', () => {
      let string =
      "@#" +
      "0@";
      newMap.setArray(string, 2, 2, 0, 0);
      expect(newMap.get(0+","+0)).toEqual(undefined);
      expect(newMap.get(1+","+0)).toEqual("@");
      expect(newMap.get(0+","+1)).toEqual("@");
      expect(newMap.get(1+","+1)).toEqual("#");
    });
  });
});