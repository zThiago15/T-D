import Race from './Race';

export default class Halfling extends Race {
  public maxLifePoints = 60;
  static instancesHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instancesHalfling += 1;
  }

  static createdRacesInstances() {
    return Halfling.instancesHalfling;
  }
}
