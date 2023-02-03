export class SolarAge {
  constructor(planet) {
    this.planetList = [
      "mars",
      "neptune",
      "pluto",
      "saturn",
      "venus",
      "mercury",
      "uranus",
      "jupiter",
      "earth"
    ];
    if(planet !== undefined && this.planetList.includes(planet)) {
      this.planet = planet;
    } else {
      this.planet = "earth";
    }
  }
}