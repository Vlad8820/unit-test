// TODO: write your code here
export function getHealthStatus(character) {
    const health = character.health;
    if (health > 50) {
        return 'healthy';
    } else if (health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}
export function sortHeroesByHealth(heroes) {
    return heroes.slice().sort((a, b) => b.health - a.health);
}



import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
