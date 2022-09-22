import Race from './Race';

export default class Dwarf extends Race {
  public maxLifePoints = 80;
  public instancesDwarf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.instancesDwarf += 1;
  }
}
