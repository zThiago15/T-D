import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private character: Fighter, 
    private monsters: SimpleFighter[],
  ) {
    super(character);
  }

  fight(): number {
    const ch = this.character;
    const mons = this.monsters;

    const monstersVerification = mons
      .some((monster) => monster.lifePoints !== -1);
    
    while (ch.lifePoints !== -1 && monstersVerification) {
      mons.map((monster) => {
        ch.attack(monster);
        monster.attack(ch);
        return monster;
      });
    }

    return super.fight();
  }
}