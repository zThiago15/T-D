import Fighter from './Fighter';
import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  private _lifePoints;
  private _strength;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;

    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(enemy.lifePoints - this._strength);
  }
}