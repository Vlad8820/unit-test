import {sortHeroesByHealth} from '../app';

test('Sorting heroes by health in descending order', () => {
    const heroes = [
        { name: 'Мечник', health: 10 },
        { name: 'Маг', health: 100 },
        { name: 'Лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
        { name: 'Маг', health: 100 },
        { name: 'Лучник', health: 80 },
        { name: 'Мечник', health: 10 },
    ]);
});
