import { SolarAge } from './../src/solarAge.js';

describe('SolarAge class', () => {

  let solar;
  beforeEach(() => {
    solar = new SolarAge("mars");
  });

  test('it should create an object that takes a planet as an input and stores it as the planet property', () => {
    expect(solar.planet).toEqual("mars");
  });

  test('it should default to earth if the planet argument is not passed', () => {
    let solarEarth = new SolarAge();
    expect(solarEarth.planet).toEqual("earth");
  });

  test('it should default to earth if the planet argument provided does not fit the name of a known planet', () => {
    let solarNonsense = new SolarAge("blek");
    expect(solarNonsense.planet).toEqual("earth");
  });

  describe('getHoursInDay method', () => {
    test('it should return the hours in the day for the planet specified in property planet', () => {
      solar.planet = "earth";
      expect(solar.getHoursInDay()).toEqual(24);
      solar.planet = "mars";
      expect(solar.getHoursInDay()).toEqual(24.62);
      solar.planet = "venus";
      expect(solar.getHoursInDay()).toEqual(5832);
    });
  });

  describe('convertMyAge method', () => {
    test('it should return your converted age to <planet> years, depending on the age and home planet given', () => {
      solar.planet = "earth";
      expect(solar.convertMyAge(10, "earth")).toEqual(10);
      expect(solar.convertMyAge(10, "venus")).toEqual(2430);
      expect(solar.convertMyAge(10, "mercury")).toBeCloseTo(586.66, 1);
    });
  });

  describe('getHoursInYear method', () => {
    test('it should return the number of hours in a year on planet <planet>', () => {
      solar.planet = "earth";
      expect(solar.getHoursInYear()).toEqual(8760);
      solar.planet = "mars"
      expect(solar.getHoursInYear()).toBeCloseTo(8986.3, 1);
    });
  });

  describe('yearsPassed method', () => {
    test('it should take arguments sinceAge, age, homePlanet and should return amount of years on planet <planet> have passed from <sinceAge> to <age>', () => {
      solar.planet = "earth";
      expect(solar.yearsPassed(0, 10, "earth")).toEqual(10);
      solar.planet = "venus";
      expect(solar.yearsPassed(0, 10, "earth")).toBeCloseTo(.04);
    });
  });
}); 