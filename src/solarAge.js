export class SolarAge {
  constructor(planet) {
    this.planetList = new Map([
      ["mars", 24.62],
      ["neptune", 16],
      ["pluto", 153],
      ["saturn", 11],
      ["venus", 5832],
      ["mercury", 1408],
      ["uranus", 17],
      ["jupiter", 10],
      ["earth", 24]
    ]);
    if(planet !== undefined && this.planetList.has(planet)) {
      this.planet = planet;
    } else {
      this.planet = "earth";
    }
  }

  getHoursInDay() {
    return this.planetList.get(this.planet);
  }

  convertMyAge(age, homePlanet) {
    let totalHours = age * (this.planetList.get(homePlanet)*365);
    return ((totalHours/this.planetList.get(this.planet))/365);
  }

  getHoursInYear() {
    return this.planetList.get(this.planet) * 365;
  }
}