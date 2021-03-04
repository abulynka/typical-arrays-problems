/**
 * Returns min value in array
 *
 * @param array
 * @returns {number}
 */
exports.min = function min (array) {
    if (!array || array.isArray === false || array.length === 0) {
        return 0
    }

    return array.reduce(
        (last, current) => {
            if (last > current) {
                return current;
            }
            return last;
        }
    );
}

/**
 * Returns max value in array
 *
 * @param array
 * @returns {number}
 */
exports.max = function max (array) {
    if (!array || array.isArray === false || array.length === 0) {
        return 0
    }

    return array.reduce(
        (last, current) => {
            if (last > current) {
                return last;
            }
            return current;
        }
    );
}

/**
 * Returns avg value in array
 *
 * @param array
 * @returns {number}
 */
exports.avg = function avg (array) {
    if (!array || array.isArray === false || array.length === 0) {
        return 0
    }

    return array.reduce(
        (last, current) => {
            return last + current;
        }
    ) / array.length;
}
