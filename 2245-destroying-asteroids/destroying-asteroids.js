/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    const sortedAsteroids = asteroids.toSorted((a, b) => a - b);
    return sortedAsteroids.reduce((accu, curr) => {
        if(mass - curr >= 0) {
            mass += curr;
            return accu && true;
        }
        else {
            return accu && false;
        }
    }, true)
};