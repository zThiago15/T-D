import Race from './Race';

class Elf extends Race {
  public maxLifePoints = 99;
  static instancesElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instancesElf += 1;
  }

  static createdRacesInstances() {
    return Elf.instancesElf;
  }
}

export default Elf;