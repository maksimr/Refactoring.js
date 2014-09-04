/**
 * Класс, который представляет данные о фильме
 * @param {string} title
 * @param {number} priceCode
 * @constructor
 */
var Movie = function (title, priceCode) {
    this._title = title;
    this._priceCode = priceCode;
};

/**
 * @returns {number|*}
 */
Movie.prototype.getPriceCode = function () {
    return this._priceCode;
};

/**
 * @returns {string|*}
 */
Movie.prototype.getTitle = function () {
    return this._title;
};

/**
 * @static
 * @enum number
 * @type {{CHILDRENS: number, REGULAR: number, NEW_RELEASE: number}}
 */
Movie.MovieTypes = {
    CHILDRENS: 2,
    REGULAR: 0,
    NEW_RELEASE: 1
};

