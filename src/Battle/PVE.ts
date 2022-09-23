import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private character: Fighter, 
    private monsters: Array<Fighter | SimpleFighter>,
  ) {
    super(character);
  }

  fight(): number {
    const ch = this.character;
    const mons = this.monsters;

    while (ch.lifePoints !== -1 && mons
      .some((monster) => monster.lifePoints !== -1)) {
      mons.map((monster) => {
        ch.attack(monster);
        monster.attack(ch);
        return monster;
      });
    }

    return super.fight();
  }
}