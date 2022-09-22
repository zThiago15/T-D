import Race from './Race';

export default class Dwarf extends Race {
  public maxLifePoints = 80;
  static instancesDwarf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instancesDwarf += 1;
  }

  static createdRacesInstances() {
    return Dwarf.instancesDwarf;
  }
}