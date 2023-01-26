import Character from '../app';
import Bowman from '../typeBowman';

test('тест класса родителя Character', () => {
  const input = new Character('Halk', 'Bowman');
  const expected = {
    name: 'Halk', type: 'Bowman', health: 100, level: 1,
  };

  expect(input).toEqual(expected);
});

test('number of characters in the name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Character('Halkfastasthewind', 'Bowman');
  }).toThrowError('имя должно содержать от 2 до 10 сиволов');
});

test('level up', () => {
  const bowman = new Bowman('Halk');
  const expected = {
    name: 'Halk',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  bowman.levelUp();
  expect(bowman).toEqual(expected);
});

test('check Character error type', () => {
  expect(() => {
    const bowman = new Bowman('Halk');
    bowman.level = 0;
    bowman.levelUp();
  }).toThrowError('you cant level up the dead');
});

test('изменение жизни персонажа после урона', () => {
  const bowman = new Bowman('Halk');
  bowman.damage(10);
  const expected = {
    name: 'Halk',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowman).toEqual(expected);
});

test('изменение жизни персонажа после урона - вывод ошибки при health < 0', () => {
  expect(() => {
    const bowman = new Bowman('Halk');
    bowman.health = -1;
    bowman.damage(10);
  }).toThrowError('character is dead');
});
