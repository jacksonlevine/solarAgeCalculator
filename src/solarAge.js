export class SolarAge {
  constructor(planet) {
    if(planet !== undefined) {
      this.planet = planet;
    } else {
      this.planet = "earth";
    }
  }
}