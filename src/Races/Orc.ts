import Race from './Race';

export default class Orc extends Race {
  public maxLifePoints = 74;
  public instancesOrcs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.instancesOrcs += 1;
  }
  
  createdRacesInstances() {
    return this.instancesOrcs;
  }
}
