import Character from './character';

export default class Hurt extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
    this.stoned = false;
  }

  /* eslint no-underscore-dangle: 0 */

  set stoned(stonedValue) {
    this._stoned = stonedValue;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(attackValue) {
    this._attack = attackValue;
  }

  get attack() {
    let attack = ((110 - this.distance * 10) / 100) * this._attack;
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }

    return attack > 0 ? Math.round(attack) : 0;
  }
}
