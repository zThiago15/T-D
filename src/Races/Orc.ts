import Race from './Race';

export default class Orc extends Race {
  public maxLifePoints = 74;
  static instancesOrcs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instancesOrcs += 1;
  }
  
  static createdRacesInstances() {
    return Orc.instancesOrcs;
  }
}
