import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  public energyType: EnergyType = 'stamina';
  static instancesRanger = 0;

  constructor(name: string) {
    super(name);
    Ranger.instancesRanger += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instancesRanger;
  }
}

export default Ranger;