/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    const size = this.length;
    if (size > 0) return this[size - 1];
    return -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */