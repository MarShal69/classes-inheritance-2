import Daemon from '../typeDaemon';

test('создание класса наследника Daemon', () => {
  const daemon = new Daemon('Jhon');
  const expected = {
    name: 'Jhon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(expected);
});
