import {getHealthStatus} from '../app';

test('health is more than 50 should return "healthy"', () => {
    const character = { name: 'Маг', health: 90 };
    const result = getHealthStatus(character);
    expect(result).toBe('healthy');
});

test('health is between 15 and 50 should return "wounded"', () => {
    const character = { name: 'Мечник', health: 30 };
    const result = getHealthStatus(character);
    expect(result).toBe('wounded');
});

test('health is less than 15 should return "critical"', () => {
    const character = { name: 'Лучник', health: 10 };
    const result = getHealthStatus(character);
    expect(result).toBe('critical');
});
