import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  public energyType: EnergyType = 'mana';
  static instancesNecromancer = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instancesNecromancer += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instancesNecromancer;
  }
}

export default Necromancer;