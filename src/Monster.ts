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

  checkLifePoints() {
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;

    if (damage > 0) {
      this._lifePoints -= attackPoints;
    }
    this.checkLifePoints();

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}