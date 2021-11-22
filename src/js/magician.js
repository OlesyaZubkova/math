import Hurt from './app';

export default class Magician extends Hurt {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    this.distance = 4;
    this.type = 'Magician';
  }
}
