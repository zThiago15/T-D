import Race from './Race';

export default class Dwarf extends Race {
  constructor(public maxLifePoints: number = 80) { super(); }
}
