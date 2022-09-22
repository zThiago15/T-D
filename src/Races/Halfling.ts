import Race from './Race';

export default class Halfling extends Race {
  public maxLifePoints = 60;
  public instancesHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.instancesHalfling += 1;
  }

  createdRacesInstances() {
    return this.instancesHalfling;
  }
}
