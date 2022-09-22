import Race from './Race';

class Elf extends Race {
  public maxLifePoints = 99;
  public instancesElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.instancesElf += 1;
  }

  createdRacesInstances() {
    return this.instancesElf;
  }
}

export default Elf;