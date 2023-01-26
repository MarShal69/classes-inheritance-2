import Undead from '../typeUndead';

test('создание класса наследника Undead', () => {
  const undead = new Undead('Storm');
  const expected = {
    name: 'Storm',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(expected);
});
