import { asciiMap } from './../src/asciiMap.js';

describe('asciiMap object', () => {

  let newMap;
  beforeEach(()=> {
    newMap = new asciiMap();
  });

  test('it should create an object that extends the Map class', ()=> {
    expect(Object.getPrototypeOf(newMap).toString()).toEqual('[object Map]');
  });
});