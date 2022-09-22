import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  public energyType: EnergyType = 'mana';
  static instancesMage = 0;

  constructor(name: string) {
    super(name);
    Mage.instancesMage += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instancesMage;
  }
}

export default Mage;