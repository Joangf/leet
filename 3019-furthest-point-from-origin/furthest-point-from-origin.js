/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let tempMove = moves.split('');
    console.log(tempMove);
    const countL = tempMove.filter((letter) => letter == 'L').length;
    const countR = tempMove.filter((letter) => letter == 'R').length;
    const count_ = tempMove.filter((letter) => letter == '_').length;
    const distance = Math.abs(countL - countR);
    return distance + count_;
};