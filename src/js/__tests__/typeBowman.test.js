import Bowman from '../typeBowman';

test('создание класса наследника Bowman', () => {
  const bowman = new Bowman('Halk');
  const expected = {
    name: 'Halk',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});

test('checking  by type for an error', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Bowman('Halk', 'Bowmanus');
  }).toThrowError('тип не установлен');
});
