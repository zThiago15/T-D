import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private player1: Character, private player2: Character) { 
    super(player1);

    super.fight();
  }
}