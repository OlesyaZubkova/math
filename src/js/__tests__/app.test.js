import Daemon from '../daemon';
import Magician from '../magician';

test('Magician is injured', () => {
  const mage = new Magician('Mage');
  mage.stoned = false;
  const result = 7;
  expect(mage.attack).toEqual(result);
});

test('Daemon is injured', () => {
  const demon = new Daemon('Demon');
  demon.stoned = true;
  const result = 0;
  expect(demon.attack).toEqual(result);
});
