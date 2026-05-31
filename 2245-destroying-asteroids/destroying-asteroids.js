/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    const sortedAsteroids = asteroids.toSorted((a, b) => a - b);
    for(asteroid of sortedAsteroids) {
        if(mass - asteroid >= 0) mass += asteroid;
        else return false;
    }
    return true;
};