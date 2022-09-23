import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private player1: Fighter, 
    private player2: Fighter,
  ) { 
    super(player1);
  }

  fight(): number {
    const p1 = this.player1;
    const p2 = this.player2;

    while (p1.lifePoints !== -1 && p2.lifePoints !== -1) {
      p1.attack(this.player2);
      p2.attack(this.player1);
    }
    return super.fight();
  }
}
