import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  public energyType: EnergyType = 'stamina';
  static instancesWarrior = 0;

  constructor(name: string) {
    super(name);
    Warrior.instancesWarrior += 1;
  } 

  static createdArchetypeInstances(): number {
    return Warrior.instancesWarrior;
  }
}

export default Warrior;