import { SolarAge } from './../src/solarAge.js';

describe('SolarAge class', () => {

  let solar;
  beforeEach(() => {
    solar = new SolarAge("mars");
  });

  test('it should create an object that takes a planet as an input and stores it as the planet property', () => {
    expect(solar.planet).toEqual("mars");
  });
}); 